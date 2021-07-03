import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const getData = async () => {
        const response = await fetch(url)
        const resJson = await response.json()
        setData(resJson)
    }

    useEffect(() => {
       getData()
    }, [])

    return data
}

export default useFetch
