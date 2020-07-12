import React, { useState } from 'react'
import { useDebounce } from '../'

export default {
  title: 'useDebounce'
}

export const Demo = () => {
  const [organicValue, setOrganicValue] = useState(null)
  const debouncedValue = useDebounce(organicValue)

  return (
    <div>
      <input onChange={e => setOrganicValue(e.target.value)} />
      <p>{debouncedValue}</p>
    </div>
  )
}
