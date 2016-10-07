import React from 'react'
import {IndexLink , Link} from 'react-router'

export default class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      collapsed : true,
    }
  }
  toggleCollapse(){
    const collapsed = !this.state.collapsed;
    this.setState({collapsed})
  }
	render(){
    const {collapsed} = this.state;
    const NavClass = collapsed ? "collapse" : "";
		return (
<div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" onClick={this.toggleCollapse.bind(this)}>
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class={"navbar-collapse " + NavClass}>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <IndexLink to='/' onClick={this.toggleCollapse.bind(this)}>Dashboard</IndexLink>
            </li>
            <li>
              <Link to='settings' onClick={this.toggleCollapse.bind(this)}>Settings</Link>
            </li>
            <li>
              <Link to='profile' onClick={this.toggleCollapse.bind(this)}>Profile</Link>
            </li>
            <li>
              <a href="#" onClick={this.toggleCollapse.bind(this)}>Help</a>
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search..." />
          </form>
        </div> 
      </div>
    </nav>
</div>
		)
	}
}