import React from 'react'
import {Link} from 'react-router'

export default class Navbar extends React.Component {
	render(){
		return (
<div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='settings'>Settings</Link></li>
            <li><Link to='profile'>Profile</Link></li>
            <li><a href="#">Help</a></li>
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