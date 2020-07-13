import { useEffect } from 'react'

const useClickOutside = (handler, ref) => {
  useEffect(() => {
    const handleClick = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler()
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [handler, ref])
}

export default useClickOutside
