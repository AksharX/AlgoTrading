import { EventEmitter } from "events"

class GraphStores extends EventEmitter {
	data = [
      {name: 'Page A', uv: 4000, price: 1000, amt: 2400},
      {name: 'Page B', uv: 3000, price: 2000, amt: 2210},
      {name: 'Page C', uv: 2000, price: 3000, amt: 2290},
      {name: 'Page D', uv: 2780, price: 4000, amt: 2000},
      {name: 'Page E', uv: 1890, price: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, price: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, price: 10000, amt: 2100},
			]


	parse(d,url){
		console.log('Running Parse Function')
		const newdata = d['bought']
		console.log('New Data for Graph', newdata)
		this.data = newdata
	}


	fetchfromserver(url) {
	    $.ajax({
	      url: "http://127.0.0.1:8000/api/stocks/" + url + "/?format=json",
	      dataType: 'json',
	      context: this,
	      cache: false,
	      success: function(d) {
	        console.log('JSON for Individual Stock: ', d)
	        this.parse(d, url);
	        this.emit('graphChange')
	    		},
	      error: function(xhr, status, err) {
	        console.error('this.props.url, status, err.toString()');
	      		}.bind(this)
	    	});
  	}
}

var GraphStore = window.GraphStore = new GraphStores

export default GraphStore