import {useEffect, useState} from "react"

export const useImageError = (src) => {
  const [imageError, setImageError] = useState(false)
  const handleError = () => {
    setImageError(true)
  }

  useEffect(() => {
    setImageError(false)
  }, [src])

  return {imageError, handleError}
}