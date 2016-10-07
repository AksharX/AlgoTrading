import React from 'react'
import { observer } from "mobx-react"


@observer
export default class TableR extends React.Component {
  converttodate(date){
    var d = new Date('2016-09-23T22:23:02Z');
    var n = d.toLocaleString();
    return n
  }
  compose(d,i,idxK){
    if (idxK === -1){
      return d
    } else {
      if (i == idxK){
        return this.converttodate(d)
      } else{
        return d
      }        
    }

  }
  render(){
  	const { data, keys, idxK } = this.props
    const DataList = data.map((d,i)=>(
        <td key={i}>{this.compose(d,i,idxK,)}</td>
      )) 
    return (
	<tr>
		{DataList}
	</tr>
    )
  }
}