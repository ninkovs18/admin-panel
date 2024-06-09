import React, { useState } from 'react'

import { Button } from '@fluentui/react-components'

const BasicComponent: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>REACT BASE !!!</h1>
      <Button onClick={() => setCount(c => c + 1)}>Count {count}</Button>
    </>
  )
}

export default BasicComponent
