'use strict'

import React, { Component } from 'react'

//componente criado como uma classe (componente stateful [por ser classe e estender])
class App extends Component {
	constructor() {
	  super()
	
	  this.state = {
	  	checked: false,
	  	showContent: false
	  }
	}

	render () {
		return (
			<div>
				<label>
					<input type="checkbox" checked={this.state.checked}
						onChange={() => {
							this.setState ({checked: !this.state.checked},
							() => {
								this.setState ({showContent: this.state.checked})
							})
						}} 
					/> Mostrar conteúdo
				</label>

				{this.state.showContent &&<div>Olha eu aqui!!!</div>}
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
