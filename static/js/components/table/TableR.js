import React from 'react'
import { observer } from "mobx-react"


@observer
export default class TableR extends React.Component {
  fetchData(stock) {
      console.log(this.props.gstore.fetchfromserver)
      setTimeout(this.props.gstore.fetchfromserver(stock), 1000000); 
      }
  render(){
    const { row , subtitles, target } = this.props
    const rowList = row.map(function(row,i){
      if (typeof row != 'object'){
        return <td key={i}>{row}</td>
      } else {
        return 
      }
    })
    return (
  	<tr data-toggle="collapse" data-target={target} class="accordion-toggle" onClick={this.fetchData.bind(this,row[0])} >
  		{rowList}
  	</tr>
    )
  }
}