import React from "react"
import "./search-box.style.css"

export const SearchBox = ({placeholder, handleChange}) =>{
    return(
        <div>
            <input 
                type="input"
                placeholder={placeholder}
                onChange={handleChange}
                className="search"
            />
        </div>
    )
}