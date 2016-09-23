from django.shortcuts import render
from rest_framework import generics
from algo.serializers import ZipSerializer
from algo.models import Stock

# Create your views here.
class StockList(generics.ListCreateAPIView):
	queryset = Stock.objects.all()
	serializer_class = ZipSerializer

class StockDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Stock.objects.all()
	serializer_class = ZipSerializer