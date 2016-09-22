from django.contrib import admin
from .models import Stock,Transaction,Sell,Buy,Cash,Algo,Algo_Data


class Algoinline(admin.TabularInline):
	model = Algo
	extra = 0

class SoldInline(admin.TabularInline):
	model = Sell
	extra = 0
class BoughtInline(admin.TabularInline):
	model = Buy
	extra = 0

class StockAdmin(admin.ModelAdmin):
	list_display = ('name','ticker','pool')
	inlines = [Algoinline,BoughtInline,SoldInline,]




class TransAdmin(admin.ModelAdmin):
	list_display = ('name','ticker','date','num_shs',)

class CashAdmin(admin.ModelAdmin):
	list_display = ('cash_name','initial_cash_amount','total')




class AlgoDinLine(admin.TabularInline):
	model = Algo_Data
	extra = 0

class AlgoAdmin(admin.ModelAdmin):
	list_display = ('stock','name',)
	inlines = [AlgoDinLine]


admin.site.register(Stock,StockAdmin)
admin.site.register(Transaction)
admin.site.register(Cash,CashAdmin)
admin.site.register(Algo,AlgoAdmin)

# Register your models here