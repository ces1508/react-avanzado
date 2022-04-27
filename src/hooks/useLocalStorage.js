import { useState } from 'react'

/**
 *
 * @param {string} key llave para obtener datos de local storage
 */
function useLocalStorage (key, intialValue = {}) {
  const { localStorage } = window
  const [storage, setStorage] = useState(() => {
    try {
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : intialValue
    } catch (e) {
      throw new Error(e.message)
    }
  })

  const setItem = (data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data))
      setStorage(data)
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return {
    storage,
    setItem
  }
}

export {
  useLocalStorage
}
