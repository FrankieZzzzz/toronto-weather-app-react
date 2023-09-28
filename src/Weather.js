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
    
    const [localCityWeather, setLocalCityWeather] = useState({triggle:false})

    const [searchCityName, setSearchCityName] = useState(null)



    function _submitForm(event){
        event.preventDefault();
        _displayLocation()

    }
    function _getSearchValue(event){
        setSearchCityName(event.target.value)
    }


    //get weather api data
    function _displayLocation(response){
        let iconCode = response.data.weather[0].icon;
        setLocalCityWeather({
            triggle: true,
            cityTemp: Math.round(response.data.main.temp),
            cityWind: response.data.wind.speed,
            cityHumidity: response.data.main.humidity,
            cityIconSrc: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
            cityCondition: response.data.weather[0].description,
            cityLocalName: response.data.name,
            cityCountry: response.data.sys.country,
            feelTemp: Math.round(response.data.main.feels_like),
            cityPressure: response.data.main.pressure,
            cityTempDayMax: Math.round(response.data.main.temp_max),
            cityTempDayMin: Math.round(response.data.main.temp_min),
            dataToFormat: response.data.dt * 1000,
            })
    }
    


    if (localCityWeather.triggle === true && searchCityName == null) {
        return(
            <div class="container row mx-auto p-0 mt-5">
                {/* Whole html return */}
                <div className="col-lg-3 mt-3" id="weather-box-left">
                    {/* seperate search engine */}
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
                    <WeatherDataL data={localCityWeather}/>
                </div>
                <div className="container col-lg-9 row m-0" id="weather-box-right">
                    <WeatherDataR data={localCityWeather}/>
                </div>
            </div>
        )}else if(localCityWeather.triggle === true || searchCityName !== null){
                let apiLocatUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=${apiKey}&units=${newUnit ? newUnit : "metric"}`;
                axios.get(apiLocatUrl).then(_displayLocation)
        }else{
            //get weather api 
            navigator.geolocation.getCurrentPosition(_getCurrentLocation);
            function _getCurrentLocation(position){
                let latCode = position.coords.latitude;
                let lonCode = position.coords.longitude;
                let apiLocatUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latCode}&lon=${lonCode}&appid=${apiKey}&units=${newUnit ? newUnit : "metric"}`;
                axios.get(apiLocatUrl).then(_displayLocation)
                return ("Loading....")
            }
        }
    }