from rest_framework import serializers
from algo.models import Stock, Buy, Sell, Transaction, Algo, Algo_Data, Cash


class TransactionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Transaction
		fields = ('stock_name','ticker','transtype','reason',
			'date','num_shs','price','cash'
			)
class CashSerializer(serializers.ModelSerializer):
	class Meta:
		model = Cash
		fields = ('cash_name','initial_cash_amount','total')



class StockSerializer(serializers.ModelSerializer):
	bought = serializers.SerializerMethodField()
	sold = serializers.SerializerMethodField()
	algo = serializers.SerializerMethodField()
	def get_bought(self,obj):
		serializers = BuySerializer(obj.buy_set.all(), many = True)
		return serializers.data
	def get_sold(self,obj):
		serializers = SellSerializer(obj.sell_set.all(), many = True)
		return serializers.data
	def get_algo(self,obj):
		serializers = AlgoSerializer(obj.algo_set.all(), many = True)
		return serializers.data

	class Meta:
		model = Stock
		fields = ('id','name','ticker','available_shares',
			'bought','sold','algo')
class BuySerializer(serializers.ModelSerializer):
	class Meta:
		model = Buy
		fields = ('id','reason','num_shs','date','price')

class SellSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sell
		fields = ('id','reason','num_shs','date','price')

class AlgoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Algo
		fields = ('id','stock','name')




class AlgoDetailSerializer(serializers.ModelSerializer):
	detail = serializers.SerializerMethodField()
	def get_detail(self,obj):
		serializers = AlgoDataSerializer(obj.algo_data_set.all(),many = True)
		return serializers.data
	
	class Meta:
		model = Algo
		field = ('id','stock','name','detail')
class AlgoDataSerializer(serializers.ModelSerializer):
	class Meta:
		model = Algo_Data
		fields = ('value','date')



