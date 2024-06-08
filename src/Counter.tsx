import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>COUNTER: {count}</button>
}

export default Counter
