from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Transaction(models.Model):
	stock_name = models.CharField(max_length=20)
	ticker = models.CharField(max_length=6)
	transtype = models.CharField(
		max_length=1,
		choices = (('S','Sold'),('B','Bought')),
		)
	reason = models.CharField(max_length=20)
	date = models.DateTimeField()
	num_shs = models.IntegerField()
	price = models.DecimalField(max_digits=6,decimal_places=2)

	def __str__(self):
		return '%s %s for $%s on %s' % (self.transtype,self.stock_name,self.price,self.date,) 

def addtrans(self,BS):
	Transaction.objects.create(
		stock_name = self.stock.name,
		ticker = self.stock.ticker,
		transtype = BS,
		reason = self.reason,
		date = self.date,
		num_shs = self.num_shs,
		price = self.price,
		)
	return None

class Stock(models.Model):
	name = models.CharField(max_length=20)
	ticker = models.CharField(max_length=6)
	pool = models.CharField(
		max_length=3, 
		choices=(('Y','YES'),('N','NO'))
		)
	
	def available_shares(self):
		soldall = [x.num_shs for x in self.sell_set.all()]
		buyall = [x.num_shs for x in self.buy_set.all()]
		return sum(buyall) - sum(soldall)

class Buy(models.Model):
	stock = models.ForeignKey(Stock,on_delete = models.CASCADE)
	reason = models.CharField(max_length=200)
	num_shs = models.IntegerField('Number of Shares Bought')
	date = models.DateTimeField('Date of the Shares Bought')
	price = models.DecimalField(max_digits=6,decimal_places=2)

	def save(self):
		addtrans(self,'B')
		return models.Model.save(self)

class Sell(models.Model):
	stock = models.ForeignKey(Stock,on_delete = models.CASCADE)
	reason = models.CharField(max_length=200)
	num_shs = models.IntegerField('Number of Shares Sold')
	date = models.DateTimeField('Date of Shares Sold')
	price = models.DecimalField(max_digits=6,decimal_places=2)

	def save(self):
		addtrans(self,'S')
		return models.Model.save(self)

class stock_performance(models.Model):
	stock = models.ForeignKey(Stock,on_delete = models.CASCADE)
	date_stamp =  models.DateTimeField()
	shs_stamp = models.IntegerField()

