import React from 'react'
import ContentLoader from 'react-content-loader'

const CategoryLoader = (props) => {
  return (
    <>
      {[1, 2, 3, 4].map(category => (
        <ContentLoader
          key={category}
          speed={2}
          width={100}
          height={100}
          viewBox='0 0 100 100'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          {...props}
        >
          <circle cx='37' cy='37' r='35' />
          <rect x='29' y='77' rx='0' ry='0' width='20' height='15' />
        </ContentLoader>
      ))}
    </>
  )
}

export { CategoryLoader }
