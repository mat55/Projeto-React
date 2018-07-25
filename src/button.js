//exemplo de PropChildren (este componente e também o Like Button)
//e também exemplo de composição junto do Like Button
//Exemplo também de componentes Stateless (igual ao square.js),
//por serem funções puras (que usam o arrowFunction)
'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
	<button className='main-button' onClick={handleClick}>
		{children}
	</button>
)

export default Button