import { useState, useEffect } from 'react'

export const useFetch = url => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchdata = async () => {
      const response = await window.fetch(url)
      const data = await response.json()
      setData(data)
      setLoading(false)
    }
    fetchdata()
  }, [])

  return { data: data, loading }
}
