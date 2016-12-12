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

    {this.props.children}
</div>

		);
	}
}


