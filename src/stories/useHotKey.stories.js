import React, { useState, useRef } from 'react'
import { useHotKey } from '../'

export default {
  title: 'Actions|useHotKey'
}

export const Demo = () => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useHotKey(() => setVisible(false), 'Escape')

  return (
    <div>
      <button onClick={() => setVisible(true)}>Abrir Modal</button>
      {visible && (
        <div
          style={{
            width: 200,
            height: 100,
            backgroundColor: 'gray',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          ref={ref}
        >
          Esc para fechar a modal
        </div>
      )}
    </div>
  )
}
