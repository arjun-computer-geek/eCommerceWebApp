import React, { useState } from 'react'

const Search = ({history}) => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) =>{
        e.preventDefault();

        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        }else{
            history.push('/')
        }
    }
    return (
        <form onSubmit={searchHandler}>
            <div className="search-box">
                <input className='search-text' type="text" placeholder="Type to search" onChange={(e) => setKeyword(e.target.value)}/>
                <i className="search-btn fa fa-search"></i>
            </div>
        </form>
    )
}

export default Search
