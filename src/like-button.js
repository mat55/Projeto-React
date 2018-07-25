'use strict'

import React from 'react'
import Button from './button'

const LikeButton = ({ handleClick }) => (
	<Button handleClick={() => alert('Curti essa aula')}>
	  Curtir
	</Button>
)

export default LikeButton