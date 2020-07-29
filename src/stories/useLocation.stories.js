import React from 'react'
import { useLocation } from '..'

export default {
  title: 'Sensors|useLocation'
}

export const Demo = () => {
  const coordinates = useLocation()

  return (
    <div>
      <span>Sua localização atual é:</span>
      <ul>
        <li>Latitude: {coordinates.latitude}</li>
        <li>Longitude: {coordinates.longitude}</li>
        <li>Precisão de {coordinates.accuracy} metros</li>
      </ul>
    </div>
  )
}
