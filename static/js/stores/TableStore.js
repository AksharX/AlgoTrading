import { computed , observable } from "mobx"



class TableStores {
	@observable titles = []
	@observable rows = ['Title of Table',[]]


	add(list){
		var titlesX = Object.values(list[0])
		var rowdataX = list[1]
		var subtitlesX = []
		for (var i = 2; i < list.length; i++) {
			subtitlesX.push(Object.values(list[i]))
		}

		this.titles.replace(titlesX) 
		this.rows.replace(rowdataX)
	}

	tableswitch(url){
		const stocks = {
			titles : {'name':'Name','ticker':'Ticker Symbol', 'available_shares':'Shares Currently Held'},
	
			rows : ['Stocks in Pool'],
			
			subtitleBS : {date:'Date',num_shs:'# of Shares',reason:'Reasons' },
			subtitleAlgo  : {name:'Name of Algorithm'},

			subtitles : { bought:{date:'Date',num_shs:'# of Shares',reason:'Reasons' }, 
							sold:{date:'Date',num_shs:'# of Shares',reason:'Reasons' }, 
							algo:{name:'Name of Algorithm'} },

			subheading : { bought:'Shares Bought', sold:'Shares Sold', algo:'Algorithms Used' },
		}
		const transaction = {
			titles : {'date':'Date' , 'stock_name':'Name of Stock', 'ticker':'Ticker Symbol',
			'transtype':'Bought or Sold' , 'num_shs':'# of Shares', 'price':'Price', 'cash':'Cash Used'
			},
			
			rows : ['Transactions'],
			
			subtitleBS : { },
			subtitleAlgo  : { },

			subtitles : { },

			subheading : { },
		}	
		const table = {'stocks':stocks,'transaction':transaction}

		return table[url]
	}

	change_data(data,title){

		return data
	}

	parses(json,url){
		var table = this.tableswitch(url)
		var titles = table.titles
		var rows = table.rows
		
		var subtitleBS = table.subtitleAlgo
		var subtitleAlgo  = table.subtitleAlgo

		var subtitles = table.subtitles

		var subheading = table.subheading

		for (var i = 0; i < json.length; i++) {
			var stock = json[i]
			var temp = []
			var datatitleList = Object.keys(titles)
			for (var o = 0; o < datatitleList.length; o++) {
				var datatitle = datatitleList[o]
				var changedH = this.change_data(stock[datatitle],datatitle)
				// Make a function that takes stocks.datatile and return desired string format
				temp.push(changedH)
			}
			if (Object.keys(subtitles).length != 0){
				var subtitleList = Object.keys(subtitles)
				for (var p = 0; p < subtitleList.length; p++) {
					var subtitle = subtitleList[p]
					//console.log('stock:', stock)
					//console.log('subtitle',subtitle)
					var subdataList = stock[subtitle]
					//console.log('SubdataList: ',subdataList)
					var subheadingList = Object.values(subtitles[subtitle])
					var subtemp = [subheading[subtitle],subheadingList] // () ---- Important! (Sub Table Heading, Table Keys, RowData, RowData)
					for (var z = 0; z < subdataList.length; z++) {
						var subObj = subdataList[z]
						//console.log('Sub Object', subObj)
						var subKeyList = Object.keys(subtitles[subtitle])
						//var subKeyList = (subtitle == 'bought' || subtitle == 'sold' ) ? Object.keys(subtitleBS) : Object.keys(subtitleAlgo)
						//console.log('SubkeyList: ',subKeyList )
						
						var tempX = []
						for (var x = 0; x < subKeyList.length; x++) {
							var subkey = subKeyList[x]
							//console.log('subkey: ',subkey)
							//This is where subdata is put in///////////////// <-------- Important
							var changeS = this.change_data(subObj[subkey],subkey)
							tempX.push(changeS)
						}
						subtemp.push(tempX)
						temp.push(subtemp)
					}		
				}
			}		
			rows.push(temp)
		}
		this.add([titles,rows]) //<========= Put Title, Then rows,
		console.log('Parsed JSON Data: ',rows)

	}

	fetchfromserver(url) {
	    $.ajax({
	      url: "http://127.0.0.1:8000/api/" + url + "/?format=json",
	      dataType: 'json',
	      context: this,
	      cache: false,
	      success: function(data) {
	        console.log('JSON: ', data)
	        this.parses(data,url);
	    		},
	      error: function(xhr, status, err) {
	        console.error('this.props.url, status, err.toString()');
	      		}.bind(this)
	    	});
  	}
}


var TableStore = window.TableStore = new TableStores

export default TableStore


