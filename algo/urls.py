from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from algo import views

urlpatterns = [
	url(r'^api/$', views.StockList.as_view()),
	url(r'^api/(?P<pk>[0-9]+)/$', views.StockList.as_view()),
	]

urlpatterns = format_suffix_patterns(urlpatterns)