import { computed , observable } from "mobx"



class TableStore {
	@observable titles = []
	@observable rows   = [[]]
	@observable collapse = []

	
	add(headKey,headvalue){
		if (this.titles != headKey){
			this.titles.replace(headKey)
		}

		if (this.rows != headvalue){
			console.log(this.rows != headvalue)
			this.rows.replace(headvalue)
		}

		console.log('headvalue:',headvalue)
		console.log('Keys:', headKey)
	}

	parse(json,url){
		var keys = Object.keys(json[0])

		//Child Values
		var childkeys = ['name','reason','num_shs','date','price']
		var ckeys = ['algo','sold','bought']
		var cvalues = []
		
		var not_used_keys = ['id']
		var DONT_INCLUDE = ckeys.concat(not_used_keys)

		//Head Values
		var headKey = keys.filter((elem)=>DONT_INCLUDE.indexOf(elem) === -1)
		var headvalue = []

		for (var s = 0; s < json.length; s++) {
			var stemp = []
			for (var k = 0; k < headKey.length; k++) {
				var key = headKey[k]
				var obj = json[s]
			stemp.push(obj[key])	
			}
			headvalue.push(stemp)
		}
		this.add(headKey,headvalue) 
		// if (url == 'stock'){
		// 	for (var s = 0; s < json.length; s++) {
		// 		var stemp = []
		// 		for (var i = 0; i < ckeys.length; i++) {
		// 			var key = ckeys[i]
		// 			var obj = json[s]
		// 			var childtemp = []
		// 			for (var z = 0; z < childkeys.length; z++) {
		// 				try{
		// 					childtemp.push(obj[key][childkeys[z]])
		// 				}
		// 			}
		// 		}
		// 		console.log('ChildTemp',childtemp) 
		// 		stemp.push(childtemp)
		// 	}
		// }
	}
	
	fetchfromserver(url) {
	    $.ajax({
	      url: "http://127.0.0.1:8000/api/"+ url +"/?format=json",
	      dataType: 'json',
	      context: this,
	      cache: false,
	      success: function(data) {
	        console.log(this, data)
	        this.parse(data,url);
	    		},
	      error: function(xhr, status, err) {
	        console.error('this.props.url, status, err.toString()');
	      		}.bind(this)
	    	});
  	}
}


var Tstore = window.Tstore = new TableStore

export default Tstore






