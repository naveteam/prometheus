import React, { useState, useRef } from 'react'
import { useClickOutside } from '../'

export default {
  title: 'Actions|useClickOutside',
  includeStories: ['Demo', 'Demo2']
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

export const Demo2 = () => {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const [visible, setVisible] = useState(false)

  useClickOutside(() => setVisible(false), ref, ref2)

  return (
    <div>
      <p>
        É possível usar n refs desejáveis caso necessário. No caso abaixo, qualquer componente que não for um dos
        modais, irá satisfazer a condição para fazer a chamada do callback.
      </p>
      <div>
        <button onClick={() => setVisible(true)}>Abrir Modal</button>
        {visible && (
          <div style={{ display: 'flex' }}>
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
            <div style={{ width: '20px', height: '100%' }} />
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
              ref={ref2}
            >
              Modal 2
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
