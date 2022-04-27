import { useMutation } from '@apollo/client'
import { useLocalStorage } from './useLocalStorage'
import { keys } from '../constants/localstorageKeys'
import { hasInObject } from '../utils'
import { LIKE_ANONYMOUS_PHOTO } from '../mutations/likePhoto'

function useLikePhoto (id) {
  const { storage, setItem } = useLocalStorage(keys.V1.favorites, {})
  const [setLike] = useMutation(LIKE_ANONYMOUS_PHOTO)

  const toogleFavorite = () => {
    const updatedStorage = { ...storage }
    if (hasInObject.call(updatedStorage, id)) {
      delete updatedStorage[id]
    } else {
      updatedStorage[id] = true
      setLike({
        variables: {
          input: { id }
        }
      })
    }
    setItem(updatedStorage)
  }

  const liked = hasInObject.call(storage, id)
  return [
    liked,
    toogleFavorite
  ]
}

export { useLikePhoto }
