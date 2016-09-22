from pyalgotrade.technical 			import ma
from pyalgotrade 					import strategy
from django.utils.timezone 			import datetime

class SMA_Strategy(strategy.BacktestingStrategy):
	def __init__(self, feed, instrument, __s,__cash):
		super(SMA_Strategy, self).__init__(feed)
		self.shares   = __s.available_shares()
		self.__instrument = instrument
		
		# We'll use adjusted close values instead of regular close values.
		#self.setUseAdjustedValues(True)
		self.__sma = ma.SMA(feed[instrument].getPriceDataSeries(), 15)
		self.algo = 'SMA'
		self.s = __s
		self.cash = __cash

	def onBars(self,bars):
		pass 
	def onFinish(self, bars):
		bar = bars[self.__instrument]
		
		self.s.algo_set.get(name='SMA').algo_data_set.create(
				value = self.__sma[-1] 
				date = datetime.now()
			)
		if self.__sma[-1] is None:
			return
		

		#SMA goes below Price - BUY
		cprice = bar.getPrice()
		if self.shares is 0:
			if cprice > self.__sma[-1]:
				if int(self.cash * .10/cprice ) > 0:
					self.s.buy_set.create(
						reason = self.algo, 
						num_shs = int(self.cash * .10/cprice), 
						date = datetime.now(),
						price = cprice,
						)
		
		#SMA goes below Price - SELL
		elif cprice < self.__sma[-1] and not self.shares.exitActive():
			self.s.sell_set.create(
				reason = self.algo,
				num_shs = 10,
				date = datetime.now(),
				price = cprice, 
				)

