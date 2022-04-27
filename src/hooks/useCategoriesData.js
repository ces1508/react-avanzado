import { useEffect, useState, useCallback } from 'react'

function useCategoriesData (api) {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const getCategoriesMemo = useCallback(
    () => {
      setLoading(true)
      async function getCategories () {
        try {
          const request = await window.fetch(api)
          const data = await request.json()
          setCategories(data)
          dismissLoader()
        } catch (e) {
          dismissLoader()
          console.log(e)
        }
      }
      getCategories()
    },
    []
  )

  const dismissLoader = () => setLoading(false)

  useEffect(() => {
    getCategoriesMemo()
  }, [getCategoriesMemo])

  return { categories, loading }
}

export {
  useCategoriesData
}
