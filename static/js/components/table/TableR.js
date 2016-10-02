import React from 'react'

export default class TableR extends React.Component {
  render(){
    return (
	<tr>
	  <td>{this.props.data}</td>
	  <td>Lorem</td>
	  <td>ipsum</td>
	  <td>dolor</td>
	  <td>sit</td>
	</tr>
    )
  }
}