from django.contrib import admin
from .models import Stock,Transaction,Sell,Buy,Cash

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

class CashAdmin(admin.ModelAdmin):
	list_display = ('cash_name','initial_cash_amount','total')

admin.site.register(Stock,StockAdmin)
admin.site.register(Transaction)
admin.site.register(Cash,CashAdmin)

# Register your models here