import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      setLoading(true)
      try{
        const response = await fetch(url)
        const json = await response.json
        setData(json.data)
      } catch(error){
        setError(error)
      } finally{
        setLoading(false)
      }      
    })()
  }, [url])

  return { data, loading, error }
}

export default useFetch