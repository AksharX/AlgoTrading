import React from 'react'
import {Link} from 'react-router'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import Table from '../components/Table'

import Tstore from '../stores/Store'


export default class Layout extends React.Component {	
	render(){
		return (
<div>
  
  <Navbar/>
    
    <div class="container-fluid">
      <div class="row">

        <Sidebar store={Tstore}/>
        
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">{this.props.children}</h1>
          <h3></h3>

            <Graph/>

         
            
            <Table Tstore={Tstore} pollInterval={10000}/>
        
        </div>
      </div>
    </div>
</div>
		);
	}
}


