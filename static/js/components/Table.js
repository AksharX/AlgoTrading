import React from 'react'

import TableR from './table/TableR'
import TableH from './table/TableH'

export default class Table extends React.Component {
  render(){
    return (
<div>
          <div class="table-responsive">
            <table class="table table-striped">

            	<TableH name='Number'/>
              
              <tbody>

              	<TableR data ='Hello'/>

              </tbody>
            </table>
          </div>
</div>
    )
  }
}