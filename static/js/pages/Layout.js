import React from 'react'
import {Link} from 'react-router'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import Table from '../components/Table'

export default class Layout extends React.Component {	
	render(){
		return (
<div>
  
  <Navbar/>
    
    <div class="container-fluid">
      <div class="row">

        <Sidebar/>
        
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Dashboard</h1>
          <h3>{this.props.children}</h3>

            <Graph/>

          <h2 class="sub-header">Section title</h2>
            
            <Table/>
        
        </div>
      </div>
    </div>
</div>
		);
	}
}


