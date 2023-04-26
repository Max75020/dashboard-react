import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div className="searchbar">
            <img src="../../assets/img/search.svg" alt="" />
            <input type="text" placeholder='Search...' />
        </div>
    )
}

export default Search