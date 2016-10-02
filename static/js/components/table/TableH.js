import React from 'react'

export default class TableH extends React.Component {
  render(){
    return (
  <thead>
    <tr>
      <th>{this.props.name}</th>
      <th>Header</th>
      <th>Header</th>
      <th>Header</th>
      <th>Header</th>
    </tr>
  </thead>
    )
  }
}