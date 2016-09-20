from django.utils.timezone import datetime
from algo.models import Stock, Buy, Sell

from pyalgotrade import strategy
from pyalgotrade.barfeed import yahoofeed
from pyalgotrade.technical import ma
from pyalgotrade.tools.yahoofinance import download_daily_bars
from yahoo_finance import Share
import csv

class SMA_Strategy(strategy.BacktestingStrategy):
	def __init__(self, feed, instrument, s):
		super(SMA_Strategy, self).__init__(feed)
		self.shares   = s.available_shares()
		self.__instrument = instrument
		
		# We'll use adjusted close values instead of regular close values.
		#self.setUseAdjustedValues(True)
		self.__sma = ma.SMA(feed[instrument].getPriceDataSeries(), 15)
		self.reason = 'Simple Moving Average'

	def onBars(self,bars):
		pass 
	def onFinish(self, bars):
		bar = bars[self.__instrument]
		
		if self.__sma[-1] is None:
			return
			# stock = models.ForeignKey(Stock,on_delete = models.CASCADE)
			# reason = models.CharField(max_length=200)
			# num_shs = models.IntegerField('Number of Shares Bought')
			# date = models.DateTimeField('Date of the Shares Bought')
			# price
		#SMA goes below Price - BUY
		if self.shares is 0:
			if bar.getPrice() > self.__sma[-1]:
				s.buy_set.create(
					reason = self.reason, 
					num_shs = 10, 
					date = datetime.now(),
					price = bar.getPrice(),
					)
		
		#SMA goes below Price - SELL
		elif bar.getPrice() < self.__sma[-1] and not self.shares.exitActive():
			s.sell_set.create(
				reason = self.reason,
				num_shs = 10,
				date = datetime.now(),
				price = bar.getPrice(), 
				)
			self.shares.exitMarket()

def RealTime(filepath,instrument):
	#Date,Open,High,Low,Close,Volume,Adj Close
	s = Share(instrument)

	date = datetime.today().strftime('%Y-%m-%d')
	O,H,L,C,V,AC = (s.get_open(), s.get_days_high(), s.get_days_low(), s.get_price(), 
					s.get_volume(),s.get_price())
	
	field = [date,O,H,L,C,V,AC]

	with open(filepath,'a') as csvfile:
		old = csv.writer(csvfile)
		add = old.writerow(field)

def run_all_strategies(instrument,filepath):

	instrument_obj = Stock.objects.get(ticker=instrument)

	RealTime(filepath,instrument)
	# Load the yahoo feed from the CSV file
	feed = yahoofeed.Feed(maxLen=300)
	feed.addBarsFromCSV(instrument,filepath)
	
	# Insert All Strategies Here! For example SMA, MACD
	sma_strategy = SMA_Strategy(feed, instrument,instrument_obj)
	sma_strategy.run()




def run_simulation():
	Stock_qs = Stock.objects.filter(pool = 'Y')
	list_of_instruments = [s.ticker for s in Stock_qs]
	
	for instrument in list_of_instruments:
		year = datetime.today().year
		filename = '%s-%s.csv' % (instrument,year) #Formating of Filename
		filepath =  'algo/CSV_FILES'.join(filename)              #Insert Directory of CSV Files!
		
		download_daily_bars(instrument,year,filepath) #### Need to UnComment Later!!!!!
		
		run_all_strategies(instrument,filepath,instrument)

#####CHANGES#######
#	
#	Instead of Downloading Everytime, call thl the RealTime() to update the current CVS,
#	only download if the CSV is not there.
#
#
#
###
