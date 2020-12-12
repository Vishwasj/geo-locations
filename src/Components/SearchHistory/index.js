import React from 'react'

const SearchHistory = ({searchHistory}) => {
    return(<div>
        <b>Last 5 Searches</b>
        {searchHistory.map((history, index)=><div key={index}>{history}</div>)}
    </div>)
}

export default SearchHistory