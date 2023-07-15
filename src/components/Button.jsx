import {memo} from 'react'

const Button = memo(({increaseHandler}) => {  // 00ab22 // 55ab22
	console.log('Button is rendered');

  return (
    <button onClick={increaseHandler}>Increase</button>
  )
})

export default Button