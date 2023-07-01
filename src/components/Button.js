import React from 'react'

const Button = ({name}) => {
  return (
	<div>
		<button className='py-2 px-4 mx-2 text-sm bg-gray-300 font-bold rounded-md'>{name}</button>
	</div>
  )
}

export default Button