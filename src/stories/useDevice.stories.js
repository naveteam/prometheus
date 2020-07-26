import React from 'react'
import { useDevice } from '../'

export default {
  title: 'Sensors|useDevice'
}

export const Demo = () => {
  const { isMobile, isIos } = useDevice()

  return (
    <div>
      <p>mobile: {`${isMobile}`}</p>
      <p>ios: {`${isIos}`}</p>
    </div>
  )
}
