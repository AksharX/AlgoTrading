from django.contrib import admin
from .models import Stock,Transaction,Sell,Buy

class SoldInline(admin.StackedInline):
	model = Sell
	extra = 1
class BoughtInline(admin.StackedInline):
	model = Buy
	extra = 1

class StockAdmin(admin.ModelAdmin):
	list_display = ('name','ticker','pool')

	inlines = [BoughtInline,SoldInline]

class TransAdmin(admin.ModelAdmin):
	list_display = ('name','ticker','date','num_shs',)

admin.site.register(Stock,StockAdmin)
admin.site.register(Transaction)

# Register your models here