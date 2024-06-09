import React, { useState } from 'react'

const BasicComponent: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>REACT BASE !!!</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </>
  )
}

export default BasicComponent
