import { useState, useEffect } from 'react'

const useLocation = () => {
  const [loading, setLoading] = useState(true)
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0, accuracy: 0 })

  useEffect(() => {
    const success = ({ coords }) => {
      setCoordinates(coords)
      setLoading(false)
    }

    const error = async err => {
      setCoordinates({ latitude: 0, longitude: 0, accuracy: 0 })
      setLoading(false)
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  return { coordinates, loading }
}

export default useLocation
