import React, { useState, useRef } from 'react'
import { useClickOutside } from '../'

export default {
  title: 'Actions|useClickOutside'
}

export const Demo = () => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useClickOutside(() => setVisible(false), ref)

  return (
    <div>
      <button onClick={() => setVisible(true)}>Abrir Modal</button>
      {visible && (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'gray',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          ref={ref}
        >
          Modal
        </div>
      )}
    </div>
  )
}
