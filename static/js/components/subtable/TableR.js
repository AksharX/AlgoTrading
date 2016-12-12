import React from 'react'
import { observer } from "mobx-react"


@observer
export default class TableR extends React.Component {
  render(){
    const { row  } = this.props
    const rowList = row.map((row,i)=>(
        <td key={i}>{row}</td>
        ))
    return (
  	<tr>
  		{rowList}
  	</tr>
    )
  }
}