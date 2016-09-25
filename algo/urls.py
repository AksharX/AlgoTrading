from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from algo import views

urlpatterns = [
	url(r'^$', views.index, name = 'index')
	]

urlpatterns = format_suffix_patterns(urlpatterns)