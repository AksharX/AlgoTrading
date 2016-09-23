from django.utils.timezone 			import datetime
from algo.models 					import Stock, Cash

from pyalgotrade.barfeed 			import yahoofeed
from pyalgotrade.tools.yahoofinance import download_daily_bars
from yahoo_finance 					import Share
import csv 							as csv
from algo.simplemoving 				import SMA_Strategy
from os.path						import isfile


def RealTime(filepath,instrument):
	
	# Download CSV from yahoo if the CSV does not already exist.
	if not isfile(filepath):
		download_daily_bars(instrument,2016,filepath)
	
	# Get Live Results from Yahoo Database and append to CSV
	s = Share(instrument)
	date = datetime.today().strftime('%Y-%m-%d')
	O,H,L,C,V,AC = (s.get_open(), s.get_days_high(), s.get_days_low(), s.get_price(), 
					s.get_volume(),s.get_price())

	#Date,Open,High,Low,Close,Volume,Adj Close
	field = [date,O,H,L,C,V,AC]
	
	with open(filepath,'a') as csvfile:
		old = csv.writer(csvfile)
		add = old.writerow(field)

def simple_moving_strategy(instrument,filepath):
	# Load the yahoo feed from the CSV file
	RealTime(filepath,instrument)
	feed = yahoofeed.Feed(maxLen=300)
	feed.addBarsFromCSV(instrument,filepath)
	
	# INSERT NEW STRATEGIES HERE.
	# NEED TO CREATE FOLDER FOR JUST STRATEGY CLASSES.
	
	for strategy in [SMA_Strategy,]
		cash = Cash.objects.get(cash_name=Cash).total()
		instrument_obj = Stock.objects.get(ticker=instrument)

		the_strats = strategy(feed, instrument,instrument_obj,cash)
		the_strats.run()


def run_simulation():
	Stock_qs = Stock.objects.filter(pool = 'Y')
	list_of_instruments = [s.ticker for s in Stock_qs]
	
	for instrument in list_of_instruments:
		year = 2016
		filename = '%s-%s.csv' % (instrument,year) 			  #Formating of Filename
		filepath =  'algo/CSV_FILES/' + filename              #Insert Directory of CSV Files!

		#download_daily_bars(instrument,year,filepath)
		simple_moving_strategy(instrument,filepath)

#####CHANGES##########################
#
#	
#	Instead of Downloading Everytime, call thl the RealTime() to update the current CVS,
#	only download if the CSV is not there.
#
#
#
######################################
