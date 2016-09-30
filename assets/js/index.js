import React from 'react'
import ReactDOM from 'react-dom'

class Layout extends React.Component{
	render(){
		return (
			<h1>It works like this!</h1>
			<h1> </h1>
		);
	}
}


ReactDOM.render(<Layout/>, document.getElementById('container'))