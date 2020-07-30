import React from 'react'
import { useLocation } from '..'

export default {
  title: 'Sensors|useLocation'
}

export const Demo = () => {
  const { coordinates, loading } = useLocation()

  return (
    <div>
      <span>Sua localização atual é:</span>
      <ul>
        <li>Latitude: {loading ? 'carregando...' : coordinates.latitude}</li>
        <li>Longitude: {loading ? 'carregando...' : coordinates.longitude}</li>
        <li>Precisão de {loading ? 'carregando...' : coordinates.accuracy} metros</li>
      </ul>
    </div>
  )
}
