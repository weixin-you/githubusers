import React from 'react'

const Pagination = ({data, pageLimit, dataLimit, totalPages, currentPage, setCurrentPage}) => {

    //Click button to go to next page
    const goToNextPage = () => {
        if(currentPage === totalPages){
            return currentPage
        }else {
             setCurrentPage(currentPage + 1)
        }
    }

    //Click button to go to previous page
    const goToPrevPage = () => {
        if(currentPage === 1 ){
            return currentPage
        }else {
            setCurrentPage(currentPage - 1)
        }
    }

    //change page when clicked
    const changePage = e =>{
        const pageNum = Number(e.target.textContent)
        setCurrentPage(pageNum)
    }

    //get data for each page
    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * dataLimit
        const endIndex = startIndex + dataLimit
        return data.slice(startIndex, endIndex)
    }

    //get page groups to be shown
    const getGroupPages = () =>{
        const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        if(start + pageLimit < totalPages){
            return new Array(pageLimit).fill().map((_, index) => start + index + 1)
        }
        return  new Array(totalPages - start).fill().map((_, index) => start + index + 1)  
    }

    if(data.length > 0){
        return (
            <>
                <h1>Github Users</h1>
                <div className='user-container'> 
                    {getPaginatedData().map(user => {
                        return <div className='user' key={user.id}>
                        <img src={user.avatar_url} alt='not available' />
                        <h4><a href={user.html_url}>{user.login}</a></h4>
                    </div>
                })}
                </div>
                <div className='page-btn-container'>
                    <button className={`default ${currentPage===1 ? 'disabled' : 'default'}`} onClick={goToPrevPage}>Previous</button>
                    {getGroupPages().map((page, index) => {
                        return <button key={index} onClick={changePage} className={` default ${currentPage===page ? 'active': 'default'}`}>{page}</button>
                    })}
                    <button className={`default ${currentPage===totalPages ? 'disabled' : 'default'}`} onClick={goToNextPage}>Next</button>
                </div>
            </>
        )
    }

    return (
        <>
            <h1>Github Users</h1>
            <h2>Loading Data...</h2>
        </>
    )
}

export default Pagination
