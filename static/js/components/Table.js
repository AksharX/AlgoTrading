import React from 'react'

import TableR from './table/TableR'
import TableH from './table/TableH'

import { observer } from "mobx-react"

@observer
export default class Table extends React.Component {
  render(){
    const { titles, rows } = this.props.Tstore
    const idxK = titles.indexOf('date')
    const datarow = rows.map((row,i)=>(
        <TableR data={row} key={i} idxK={idxK}/>
      ))
    return (

<div>
  <h2 class="sub-header">Section title</h2>
          <div class="table-responsive">
            <table class="table table-striped" class="table table-hover">

            	<TableH titles={titles}/>
              
              <tbody>

              	{datarow}

              </tbody>
            </table>
          </div>
</div>
    )
  }
}