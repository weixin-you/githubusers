import {useState, useEffect} from 'react'
import Pagination from './Pagination'

const url='https://api.github.com/users?per_page=100'
const App = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageLimit = 5
    const dataLimit = 9
    const totalPages = Math.ceil(data.length / dataLimit)

    useEffect(() => {
        fetch(url).then(response => response.json()).then(resJson => setData(resJson))
    }, [])

    return <Pagination data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={pageLimit} dataLimit={dataLimit} totalPages={totalPages}/>
}

export default App
