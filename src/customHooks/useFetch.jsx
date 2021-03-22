import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(data => 
        setData(data)
      )
      .catch(error => {
        setError(error)
        console.log(error, 'dari useFetch error');
      })
      .finally(
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
  }, [url])
  
  return [data, loading, error]
}

export default useFetch
