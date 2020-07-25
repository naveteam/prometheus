import { useState, useEffect } from 'react'

const useDevice = () => {
  const [isMobile, setMobile] = useState(false)
  const [isIos, setIsIos] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
    if (mobile) {
      setIsIos(Boolean(userAgent.match(/iPhone|iPad|iPod/i)))
    }
    setMobile(mobile)
  }, [])

  return { isMobile, isIos }
}

export default useDevice
