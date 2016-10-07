import React from 'react'
import { observer } from "mobx-react"



@observer
export default class TableH extends React.Component {
  render(){
    const { titles } = this.props
    const titleLis = this.props.titles.map((title,i) =>(
        <th key={i}>{title}</th>
      ))
    
    return (
  <thead>
    <tr>
    {titleLis}
    </tr>
  </thead>
    )
  }
}