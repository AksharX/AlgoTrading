import React from 'react'
import {Link} from 'react-router'

import TableStore from '../stores/TableStore'
import GraphStore from '../stores/GraphStore'

import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import Table from '../components/Table'



export default class Dashboard extends React.Component {
	render(){
		return (
	<div class="container-fluid">
      <div class="row">

        <Sidebar store={TableStore}/>
        
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Dashboard</h1>
          <h3></h3>

            <Graph store={GraphStore}/>

         
            
            <Table store={TableStore} gstore={GraphStore}/>
        
        </div>
      </div>
    </div>
		);
	}
}