'use strict'

import React,  { Component } from 'react'

//componente criado como uma classe (componente statefull [por ser classe e estender])
class App extends Component {
	constructor() {
	  super()	
	  this.state = {
		text: 'Matheus'	
	  }
	}

	render () {
		return (
			<div className='container' onClick={() => this.setState({
				text: 'Campos'
			})}>
			  {this.state.text}
			</div>
		)
	}
}
//
// const App = React.createClass({
//   render: function () {
//     return ( 
// 	    <div className='container'>
// 			<Title name="Matheus Wallace" /> 	
// 	    </div>
//     )
//   }
// })
export default App
