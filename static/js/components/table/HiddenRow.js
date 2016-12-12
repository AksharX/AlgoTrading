import React from 'react'
import { observer } from "mobx-react"

import SubTable from '../SubTable'


@observer
export default class HiddenRow extends React.Component {
  createtable(){
    const { subdata } = this.props
    var tableList = []

    for (var i = 0; i < subdata.length; i++) {
      var arr = subdata[i]
      if (typeof arr == 'object'){
        tableList.push(<SubTable key={i} subdata={arr.slice(2)} head={arr[0]} titles={arr[1]}  />)
      }
    }
    return tableList
    }
  render(){ 
  	const {subdata, id} = this.props
  	return (
        <tr>
            <td colSpan="6" style={{padding:0}}>
              <div class="accordian-body collapse" id={id}>
                    {this.createtable()}
              </div>
            </td>
        </tr>
    )
  }
}