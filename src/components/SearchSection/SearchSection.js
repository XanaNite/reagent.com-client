import React from 'react'
import './SearchSection.css'

export default function SearchSection(){
    return(
        <section className="search-section">
            <form>
                <input type="text" />
                <button type="submit">Search</button>
            </form>
        </section>
    )
}