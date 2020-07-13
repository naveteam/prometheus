import { useEffect } from 'react'

const useHotkey = (handler, key) => {
  useEffect(() => {
    const handleClick = event => {
      if (event.key !== key) {
        return
      }

      handler()
    }

    document.addEventListener('keydown', handleClick)

    return () => document.removeEventListener('keydown', handleClick)
  }, [key, handler])
}

export default useHotkey
