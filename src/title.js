'use strict'

import React from 'react'

const Title = (props) => (
	<h1>Olá {props.name + ' ' + props.lastName}</h1>
) 

Title.defaultProps = {
	name: 'Desconhecido',
	lastName: 'Com um Sobrenome Dahora'
}

// const Title = React.createClass({
// 	getDefaultProps: function () {
// 		return {
// 			name: "Matheus",
// 			lastName: "Campos"
// 		}
// 	},

// 	render: function () {
// 		return (
// 			<h1>Olá {this.props.name + ' ' + this.props.lastName}</h1>
// 		)
// 	}
// })

export default Title