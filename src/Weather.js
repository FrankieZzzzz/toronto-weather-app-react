import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDataL from "./WeatherDataL";
import WeatherDataR from "./WeatherDataR";

export default function _weather(){
    //search for city data
    // const [triggle, setTriggle] = useState(false)
    //simplify the code, insert variable to useState
    
    let newUnit = "metric"
    const apiKey = "c5f0e59acac64258bb92ed027d20c68f";
    const [searchCityName, setSearchCityName] = useState(null)
    const [localCityWeather, setLocalCityWeather] = useState({
        triggle:false,
        sunRiseTime:0,
        sunSetTime:0
    })
    // Function to convert Unix timestamp to time (hh:mm AM/PM format)
    function convertUnixTimestampToTime(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert to milliseconds
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedMinutes = minutes.toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes}`;
    }

    function _submitForm(event){
        event.preventDefault();
        // Check if searchCityName is not null or empty
        if (searchCityName){
             // Make the API call with the searchCityName
            let apiLocatUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=${apiKey}&units=${newUnit ? newUnit : "metric"}`;
            axios.get(apiLocatUrl).then(_displayLocation)
        }
    }

    //get input value
    function _getSearchValue(event){
        setSearchCityName(event.target.value)
    }

    //get weather api data
    function _displayLocation(response){
        // let iconCode = response.data.weather[0].icon;
        setLocalCityWeather({
            triggle: true,
            cityTemp: Math.round(response.data.main.temp),
            cityWind: response.data.wind.speed,
            cityHumidity: response.data.main.humidity,
            // cityIconSrc: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
            cityIconSrc: response.data.weather[0].icon,
            cityCondition: response.data.weather[0].description,
            cityLocalName: response.data.name,
            cityCountry: response.data.sys.country,
            feelTemp: Math.round(response.data.main.feels_like),
            cityPressure: response.data.main.pressure,
            cityTempDayMax: Math.round(response.data.main.temp_max),
            cityTempDayMin: Math.round(response.data.main.temp_min),
            dataToFormat: response.data.dt * 1000,
            sunRiseTime: convertUnixTimestampToTime(response.data.sys.sunrise), // Convert to formatted time
            sunSetTime: convertUnixTimestampToTime(response.data.sys.sunset), // Convert to formatted time
            sendCityCoord: response.data.coord
            })
    }     
    
    
    if (localCityWeather.triggle) {
        return(
            <div className="conTainer">
                {/* Whole html return */}
                {/* left section */}
                <div  id="weather-box-left">
                    {/* seperate search engine */}
                    <form action="" method="get" id="search-form" onSubmit={_submitForm}>
                        <div>
                            <input type="text" id="search-bar" placeholder="Search for place"autoComplete="off" onChange={_getSearchValue}/>
                            <span id="data-clear-input">&times;</span>
                        </div>
                        <button id="searchBtn-icon">
                            <i className="fa-solid fa-magnifying-glass" id="search-icon"></i>
                        </button>
                    </form>
                    {/* rest of the left side content */}
                    <WeatherDataL data={localCityWeather}  />
                </div>
                {/* right section */}
                <div  id="weather-box-right">
                    <WeatherDataR data={localCityWeather} coordinates={localCityWeather.sendCityCoord}/>
                </div>
                
            </div>
        )}else{
            //get weather api 
            navigator.geolocation.getCurrentPosition(_getCurrentLocation);
            function _getCurrentLocation(position){
                let latCode = position.coords.latitude;
                let roundLat = latCode.toFixed(1);
                let lonCode = position.coords.longitude;
                let roundLon = lonCode.toFixed(1);
                let apiLocatUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${roundLat}&lon=${roundLon}&appid=${apiKey}&units=${newUnit ? newUnit : "metric"}`;
                axios.get(apiLocatUrl).then(_displayLocation)
                return ("Loading....")
            }
        }
    }