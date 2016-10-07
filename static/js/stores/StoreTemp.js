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






xw