
const Pagination = ({data, pageLimit, currentPage, setCurrentPage, dataLimit, totalPages}) => {

    const goToNextPage = () =>{
        setCurrentPage(page =>{
            if(page === totalPages){
                return page
            }else {
                return page + 1
            }
        })
    }

    const goToPrevPage = () =>{
        setCurrentPage(page => {
            if(page === 1){
                return page
            }else {
                return page - 1
            }
        })
    }

    const changePage = e => {
        const pageNum = Number(e.target.textContent)
        setCurrentPage(pageNum)
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return data.slice(startIndex, endIndex)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        if(start + 3 <= totalPages){
            return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
        }else {
            return new Array(totalPages - start).fill().map((_, idx) => start + idx + 1)
        }
    }


    if(data.length > 0){
        return (
            <>
                <h1>Github Users</h1>
                <div className='container'>
                    {getPaginatedData().map(user =>{
                        return <div key={user.id} className='user'>
                            <img src={user.avatar_url} alt='no avatar available'/>
                            <h4>{user.login}</h4>
                            <button className='detail'><a href={user.html_url}>Detail</a></button>
                        </div>
                    })}
                </div>
                <div className='btn-container'>
                    <button className={`pagebtn ${currentPage===1 ? 'gray': 'pagebtn'}`} onClick={goToPrevPage}>Previous</button>
                {getPaginationGroup().map((page, index) =>{
                    return <button key={index} className={`pagebtn ${currentPage===page ? 'active' : 'disabled'}`} onClick={changePage}>{page}</button>
                })}
                    <button className={`pagebtn ${currentPage===totalPages? 'gray': 'pagebtn'}`} onClick={goToNextPage}>Next</button>
                </div>
                
            </>
        )  
    }

    return <>
     <h1>Github Users</h1>
     <h2>Loading Data...</h2>
    </>
}

export default Pagination
