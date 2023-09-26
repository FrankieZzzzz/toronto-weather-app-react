import React, {useState} from "react";
import axios from "axios";


export default function SearchEngine(){
    const [cityValue, setCityValue] = useState()

    function searchCity(){
        let newUnit = "metric"
        const apiKey = "c5f0e59acac64258bb92ed027d20c68f";
        let apiLocatUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=${newUnit ? newUnit : "metric"}`;
        axios.get(apiLocatUrl).then(_displayLocation)
    }

    function _submitForm(event){
        event.preventDefault()
    }
    function _getSearchValue(event){
        setCityValue(event.target.value)
    } 
    return(
        <form action="" method="get" class="mb-3 ms-2" id="search-form" onSubmit={_submitForm}>
            <p class="col-5" id="topTitle">Toronto Forecast</p>
            <div>
                <input type="text" class="border-0 rounded-5"id="search-bar" placeholder="Search for place"autocomplete="off" onChange={_getSearchValue}/>
                <span id="data-clear-input">&times;</span>
                <button id="searchBtn-icon">
                    <i class="fa-solid fa-magnifying-glass ps-2" id="search-icon"></i>
                </button>
            </div>
        </form>
    )
}