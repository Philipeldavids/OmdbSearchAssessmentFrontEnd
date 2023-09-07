import React from 'react'
import "./SearchResults.css"

export default function SearchResults({ results }) {
    const array = Object.values(results);
    
    
    return (
    <div>
      {array[0]}
      {array[1]}
    </div>
  )
}
