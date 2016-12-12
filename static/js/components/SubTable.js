import React from 'react'


import TableR from './subtable/TableR'
import TableH from './subtable/TableH'
import HiddenRow from './table/HiddenRow'

import { observer } from "mobx-react"

@observer
export default class Table extends React.Component {

  render(){
    const { subdata , titles, head } = this.props
    const rowDataList = subdata.map((data,i)=>(
      <TableR row={data} key={i}/>
      ))

    return (
<div class="col-md-6">
 
  <div class="table-responsive">
    <table class="table table-condensed">
    <caption>{ head }</caption>
      <TableH titles={ titles } />
        <tbody>
        {rowDataList}
        </tbody>
    </table>
  </div>
</div>

    )
  }
}