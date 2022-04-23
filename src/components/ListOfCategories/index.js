import React, { useState, useEffect, useCallback } from 'react'
import { Category } from '../Category'
import { List, Item, ListAnimatedWrapper } from './styled'
import { API_PATH } from '../../constants/api'
import { CategoryLoader } from '../CategoryLoader'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const getCategoriesMemo = useCallback(
    () => {
      setLoading(true)
      async function getCategories () {
        try {
          const request = await window.fetch(`${API_PATH}/categories`)
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

  const dismissLoader = () => setTimeout(() => setLoading(false), 2500)

  useEffect(() => {
    getCategoriesMemo()
  }, [getCategoriesMemo])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  const handleScroll = useCallback(() => {
    const newShowFixed = window.scrollY > 200
    showFixed !== newShowFixed && setShowFixed(newShowFixed)
  }, [showFixed, loading])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  function renderContent () {
    if (loading) return <CategoryLoader />
    return categories.map(category => (
      <Item key={category.id}>
        <Category {...category} />
      </Item>
    ))
  }

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        renderContent()
      }
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && <ListAnimatedWrapper>{renderList(true)}</ListAnimatedWrapper>}

    </>
  )
}
