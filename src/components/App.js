//import useFetch hook to get data from github
import {useEffect, useState} from 'react'
import Pagination from './Pagination'

const url = 'https://api.github.com/users'
const App = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageLimit = 3
    const dataLimit = 4
    const totalPages = Math.ceil(data.length / dataLimit)

    const getData = async inputURL =>{
        const response = await fetch(inputURL)
        const resJson = await response.json()
        setData(resJson)
    }

    useEffect(() =>{
       getData(url)
    }, [])

   return <Pagination data={data} pageLimit={pageLimit} currentPage={currentPage} setCurrentPage={setCurrentPage} dataLimit={dataLimit} totalPages={totalPages}/>

}

export default App
