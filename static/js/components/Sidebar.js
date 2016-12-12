import React from 'react'
import {Link} from 'react-router'

export default class Sidebar extends React.Component {
  fetchData(url) {
      console.log(this.props.store.fetchfromserver)
      setTimeout(this.props.store.fetchfromserver(url), 1000000); 
      }
	render(){

		return (
<div>
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Performance<span class="sr-only">(current)</span></a></li>
            <li><a href="#">Metrics</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="#" onClick={this.fetchData.bind(this,'transaction')}>Recent Trades<span class="sr-only">(current)</span></a></li>
            <li><a href="#" onClick={this.fetchData.bind(this,'stocks')}>Stocks in Pool</a></li>
            <li><a href="#" >Algorithms</a></li>
            <li><a href="#">Export</a></li>
          </ul>
        </div>	

</div>
		)
	}
}