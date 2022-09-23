import React, { useState } from 'react'

const Counter = () => {
  // let count = 0
  const [count, setCount] = useState(0)

  // const incrementCount = () => {
  //   console.log('pre', count)
  //   setCount(count + 1)
  //   console.log('post', count)
  // }

  // const decrementCount = () => {
  //   console.log('pre', count)
  //   setCount(count - 1)
  //   console.log('post', count)
  // }

  // Can be written as above (normal function) or if the function is small, it can be written as below

  return (
    <div>
      <h1>Counter App: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          }
        }}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
