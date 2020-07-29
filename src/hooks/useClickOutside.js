import { useEffect } from 'react'

const MOUSEDOWN = 'mousedown'
const TOUCHSTART = 'touchstart'

const useClickOutside = (handler, ...refs) => {
  useEffect(() => {
    const handleClick = event => {
      if (refs.length > 0) {
        const needToHandle = refs.some(ref => !ref.current || ref.current.contains(event.target))
        if (needToHandle) {
          return
        }
        return handler(event)
      }

      throw new Error('É necessário ao menos uma ref.')
    }

    document.addEventListener(MOUSEDOWN, handleClick)
    document.addEventListener(TOUCHSTART, handleClick)

    return () => {
      document.removeEventListener(MOUSEDOWN, handleClick)
      document.removeEventListener(TOUCHSTART, handleClick)
    }
  }, [handler, refs])
}

export default useClickOutside
