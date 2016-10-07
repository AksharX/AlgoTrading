import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'

//Pages Layouts
import Layout from "./pages/Layout"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"

import Tstore from "./stores/Store"


const app = document.getElementById('react-app')
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path = "/" component={Layout}>
			<IndexRoute 										component={Dashboard}> </IndexRoute>
			<Route path='profile(/:user)' 	name = "profile" 	component={Profile}>	</Route>
			<Route path='settings' 			name = "settings" 	component={Settings}>   </Route>
		</Route>
	</Router>, 
app)