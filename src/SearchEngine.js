import React from "react"

export default function SearchEngine(){
    return(
        <form action="" method="get" class="mb-3 ms-2" id="search-form">
            <p class="col-5" id="topTitle">Toronto Forecast</p>
            <div>
                <input type="text" class="border-0 rounded-5"id="search-bar" placeholder="Search for place"autocomplete="off"/>
                <span id="data-clear-input">&times;</span>
                <button id="searchBtn-icon">
                    <i class="fa-solid fa-magnifying-glass ps-2" id="search-icon"></i>
                </button>
            </div>
        </form>
    )
}