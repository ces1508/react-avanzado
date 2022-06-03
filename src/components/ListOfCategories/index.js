import React, { useState, useEffect, useCallback } from 'react'
import { useCategoriesData } from '@hooks/useCategoriesData'
import { Category } from '@components/Category'
import { List, Item, ListAnimatedWrapper } from './styled'
import { API_PATH } from '@constants/api'
import { CategoryLoader } from '@components/CategoryLoader'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData(`${API_PATH}/categories`)
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
