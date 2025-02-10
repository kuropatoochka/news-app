import {useEffect, useState} from "react"

export const useResizeObserver = (ref) => {
  const [infoWidth, setInfoWidth] = useState(0)

  useEffect(() => {
    const updateInfoWidth = () => {
      if (ref.current) {
        const itemWidth = ref.current.offsetWidth
        setInfoWidth(Math.max(itemWidth - ((itemWidth > 900) ? 370 : (itemWidth > 670) ? 270 : 56), 0))
      }
    }

    const resizeObserver = new ResizeObserver(updateInfoWidth)

    if (ref.current) {
      resizeObserver.observe(ref.current)
    }

    updateInfoWidth()

    return () => resizeObserver.disconnect()

  }, [ref])

  return infoWidth
}

