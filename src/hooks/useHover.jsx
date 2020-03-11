import { useState } from 'react'

export const useHover = () => {
  const [value, setValue] = useState(false)
  return [value, setValue]
}
