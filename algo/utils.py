from algo.models import Stock

#from pyalgotrade import strategy
#from pyalgotrade.barfeed import yahoofeed
#from pyalgotrade.technical import ma
#
#
#class MyStrategy(strategy.BacktestingStrategy):
#    def __init__(self, feed, instrument):
#        strategy.BacktestingStrategy.__init__(self, feed)
#        # We want a 15 period SMA over the closing prices.
#        self.__sma = ma.SMA(feed[instrument].getCloseDataSeries(), 15)
#        self.__instrument = instrument
#
#    def onBars(self, bars):
#        bar = bars[self.__instrument]
#        self.info("%s %s" % (bar.getClose(), self.__sma[-1]))

def runAlgo():
    s = Stock(
    name='Test Stock',
    ticker='Test Ticker',
    pool='N',
    )
    s.save()
    
#	# Load the yahoo feed from the CSV file
#	feed = yahoofeed.Feed()
#	feed.addBarsFromCSV("orcl", "orcl-2000.csv")
#
#	# Evaluate the strategy with the feed's bars.
#	myStrategy = MyStrategy(feed, "orcl")
#	myStrategy.run()


