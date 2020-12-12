import React from 'react'
import './index.css'

const SearchResult = ({geoNames}) => {
    return(<div>
        <p>Displaying the Geo Names fetched for the search...</p>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Latitude</th>
            <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
          {geoNames.map(geoName=>(
            <tr key={geoName.geonameId}>
              <td>{geoName.name}</td>
              <td>{geoName.countryName}</td>
              <td>{geoName.lat}</td>
              <td>{geoName.lng}</td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>)
}

export default SearchResult