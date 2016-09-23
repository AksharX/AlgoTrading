from rest_framework import serializers
from algo.models import Stock, Buy, Sell, Transaction, Algo, Cash


class ZipSerializer(serializers.ModelSerializer):
	class Meta:
		model = Stock
		field = ('id','name','ticker')