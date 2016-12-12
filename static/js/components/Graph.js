import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts'

import { observer } from "mobx-react"

export default class Graph extends React.Component {
	constructor(){
		super()
		this.state = {
			data : []
		}
	}
	componentWillMount(){
		const { store } = this.props
		store.on('graphChange',()=>(
			this.setState({
				data : store.data
			})
		))
	}
	render(){
	return (
		<LineChart width={600} height={300} data={this.state.data}
            margin={{top: 10, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>

		)
	}
}