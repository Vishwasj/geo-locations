import React, {useRef, useState} from 'react'
import './index.css'
import axios from 'axios'
import SearchResult from '../SearchResult'
import SearchHistory from '../SearchHistory'
import ErrorComponent from '../common/ErrorComponent'

const SearchBox = () => {

    const searchRef = useRef()
    const [geoNames, setGeoNames] = useState(null)
    const [searchHistory, setSearchHistory] = useState([])
    const [loading, setLoader] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    const getGeoNames = async e => {
        e.preventDefault()
        const searchText = searchRef.current.value
        const {REACT_APP_USER_NAME: username, REACT_APP_MAX_ROWS: maxRows} = process.env
        const url = `http://api.geonames.org/searchJSON?q=${searchText}&maxRows=${maxRows}&username=${username}`
        const geoNameSearch = searchText ? searchText : 'ALL'
        searchHistory.length === 5 ? setSearchHistory([...searchHistory.slice(1), geoNameSearch]) : setSearchHistory([...searchHistory, geoNameSearch])
        try{
            setLoader(true)
            setGeoNames(null)
            const {data} = await axios.get(url)
            const fetchedGeoNames = []
            data.geonames.map(geoName=>fetchedGeoNames.push(geoName))
            setLoader(false)
            setGeoNames(fetchedGeoNames)
            setErrorMessage('')
        }
        catch(error){
            errorHandling(error)
            setLoader(false)
        }
    }

    const errorHandling = error => {
        if(error.response) setErrorMessage('Server error in sending the response')
        else if(error.request) setErrorMessage('Request from client was unsuccessful')
        else setErrorMessage(error.message)
    }

    return(
        <div>
            <form onSubmit={getGeoNames}>
                <input type="text" className="searchBox" ref={searchRef} />
                <button type="submit" className="searchButton" onClick={getGeoNames} disabled={loading}>
                    {loading ? <span>Searching...</span> : <span>Search</span>}
                </button>
            </form>
            {searchHistory.length>0 && <SearchHistory searchHistory={searchHistory}/>}
            {errorMessage && <ErrorComponent message={errorMessage} />}
            {geoNames && (geoNames.length>0 ? <SearchResult geoNames={geoNames}/> : <ErrorComponent message='No Records Found' />)}
        </div>
    )
}

export default SearchBox