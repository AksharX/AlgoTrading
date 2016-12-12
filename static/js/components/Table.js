import React from 'react'


import TableR from './table/TableR'
import TableH from './table/TableH'
import HiddenRow from './table/HiddenRow'

import { observer } from "mobx-react"

@observer
export default class Table extends React.Component {
  data(){
    var {store, gstore } = this.props
    var rowsX = store.rows
    var subtitles = store.subtitles
    var rows = rowsX.slice(1) 
    var rowList = []
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i]
        var x = 99999 + i
        rowList.push(<TableR key={i} row={row} target={'#' + x} gstore={gstore} />) 
        rowList.push(<HiddenRow key={x} subdata={row} id={'' + x}/>)
    } 
     return rowList 
  }

  render(){
    const { titles , rows } = this.props.store
    return (
<div>
  <h2 class="sub-header">{rows[0]}</h2>
          <div class="table-responsive">
            <table class="table table-condensed" class="table table-hover">
            	<TableH titles={titles}/>
                <tbody>
              	 {this.data()}
                </tbody>
            </table>
          </div>
</div>
    )
  }
}