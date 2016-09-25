from django.shortcuts import render
from rest_framework import generics
from .serializers import (
	StockSerializer , 
	AlgoSerializer, 
	AlgoDetailSerializer,
	TransactionSerializer,
	CashSerializer,

	)
from algo.models import Stock, Buy, Algo, Transaction, Cash

def index(request):
	return render(request,'AlgoSite/index.html',{
		})

#
#	API VIEWSS
# .
class StockList(generics.ListAPIView):
	queryset = Stock.objects.all()
	serializer_class = StockSerializer

class StockDetail(generics.RetrieveAPIView):
	queryset = Stock.objects.all()
	lookup_field = 'name'
	serializer_class = StockSerializer

class AlgoDetail(generics.RetrieveAPIView):
	queryset = Algo.objects.all()
	serializer_class = AlgoDetailSerializer

class TransactionList(generics.ListAPIView):
	queryset = Transaction.objects.all()
	serializer_class = TransactionSerializer

class CashList(generics.ListAPIView):
	queryset = Cash.objects.all()
	serializer_class = CashSerializer