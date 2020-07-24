import React from 'react'
import { useWindowSize } from '../'

export default {
  title: 'Sensors|useWindowSize'
}

export const Demo = () => {
  const { width, height } = useWindowSize()

  return (
    <div>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  )
}
