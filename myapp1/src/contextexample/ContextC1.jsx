import React, { useContext } from 'react'
import ContextC2 from './ContextC2'
import { GlobalDataProvider } from './ContextAPI'

const ContextC1 = () => {
    const data = useContext(GlobalDataProvider);
  return (
    <div>ContextC1
        <h1>{data.count}</h1>
        <button onClick={data.incre}>increment</button>
        <hr />
        <ContextC2/>
    </div>
  )
}

export default ContextC1