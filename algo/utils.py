from django.utils.timezone 			import datetime
from algo.models 					import Stock, Cash

from pyalgotrade.barfeed 			import yahoofeed
from pyalgotrade.tools.yahoofinance import download_daily_bars
from yahoo_finance 					import Share
import csv 							as csv
from algo.simplemoving 				import SMA_Strategy



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

def simple_moving_strategy(instrument,filepath):
	cash = Cash.objects.get(cash_name=Cash).total()
	instrument_obj = Stock.objects.get(ticker=instrument)

	RealTime(filepath,instrument)
	# Load the yahoo feed from the CSV file
	feed = yahoofeed.Feed(maxLen=300)
	feed.addBarsFromCSV(instrument,filepath)

	# Insert All Strategies Here! For example SMA, MACD
	sma_strategy = SMA_Strategy(feed, instrument,instrument_obj,cash)
	sma_strategy.run()




def run_simulation():
	Stock_qs = Stock.objects.filter(pool = 'Y')
	list_of_instruments = [s.ticker for s in Stock_qs]
	
	for instrument in list_of_instruments:
		year = datetime.today().year
		filename = '%s-%s.csv' % (instrument,year) #Formating of Filename
		filepath =  'algo/CSV_FILES/' + filename              #Insert Directory of CSV Files!
		
		download_daily_bars(instrument,year,filepath) #### Need to UnComment Later!!!!!
		
		simple_moving_strategy(instrument,filepath)

#####CHANGES#######
#	
#	Instead of Downloading Everytime, call thl the RealTime() to update the current CVS,
#	only download if the CSV is not there.
#
#
#
###
