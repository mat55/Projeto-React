//exemplo de PropChildren (este componente e também o Like Button)
//e também exemplo de composição junto do Like Button
//Exemplo também de componentes Stateless (igual ao square.js),
//por serem componentes de funções puras (que usam o arrowFunction)
'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
	<button className='main-button' onClick={handleClick}>
		{children}
	</button>
)

Button.propTypes = {
	handleClick: React.PropTypes.func.isRequired
}

export default Button