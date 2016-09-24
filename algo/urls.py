from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from algo import views

urlpatterns = [
	url(r'^stocks/$', views.StockList.as_view()),
	url(r'^stocks/(?P<name>[a-zA-Z]+)/$',	views.StockDetail.as_view()),
	url(r'^algo/(?P<pk>[0-9]+)/$', 			views.AlgoDetail.as_view()),
	url(r'^transaction/$',  	   			views.TransactionList.as_view()),
	url(r'^cash/$', 			   			views.CashList.as_view())
	]

urlpatterns = format_suffix_patterns(urlpatterns)