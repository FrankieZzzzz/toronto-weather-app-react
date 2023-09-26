import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import MomentTime from "./MomentTime"

export default function _weather(){
    const apiKey = "c5f0e59acac64258bb92ed027d20c68f";
    //search for city data
    // const [triggle, setTriggle] = useState(false)
    //simplify the code, insert variable to useState
    const [localCityWeather, setLocalCityWeather] = useState({triggle:false})
    
    //get weather api data
    function _displayLocation(response){
        // console.log(response.data);
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
    
if (localCityWeather.triggle) {
    return(
         <div class="container row mx-auto p-0 mt-5">
            <section id="weather-box-left" className="col-lg-3 mt-3">
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
                <div id="current-location">
                    <span id="current-city">{localCityWeather.cityLocalName}</span>
                    <span id="current-country">{localCityWeather.cityCountry}</span>
                </div>
                <img src={localCityWeather.cityIconSrc} alt="heroImg" id="weather-box-left-img" />
                <ul class="fw-light d-flex" id="temp-list">
                    <li id="main-temp">{localCityWeather.cityTemp}</li>
                    <li><span class="temp">|</span></li>
                </ul>
                <ul id="weather-box-left-detail" class="pt-2">
                    <li class="pt-4">
                        <span class="material-symbols-outlined leftSideIcon">
                            {" "}
                            sentiment_satisfied{" "}
                        </span>{" "}
                        Feels Like: {localCityWeather.feelTemp}<span id="weather-feeling-temp"></span>°
                    </li>
                    <li className="d-flex ">
                        <span class="material-symbols-outlined leftSideIcon">
                            {" "}
                            calendar_month{" "}
                        </span>
                        <div className="mt-1 ms-1">
                            <MomentTime date="MMMM Do YYYY" time="h:mm:ss A"/>
                        </div>
                    </li>
                    <li id="weather-box-left-date">
                        <div id="current-date"></div>
                        <div class="time-zone" id="current-time"></div>
                    </li>
                </ul>
                <hr id="left-side-line" />
                <div class="weather-detail-img">
                    <img src="" alt="local-city" id="displayImgGalery" />
                    <span id="insertCityName"></span>
                </div>
            </section>
            <section id="weather-box-right" className="container col-lg-9 row m-0">
                <nav id="weather-box-right-top">
                    <p class="col-5" id="brand-logo-name">Toronto Forecast</p>
                    <div class="col-lg-4 right-top-small-title">
                        <i class="col-0 pe-2 fa-solid fa-location-dot"id="getCurrentLocation"></i>
                        <span class="cnBtn">Weather in {localCityWeather.cityLocalName}</span>
                        <span class="inputLocation"></span>
                    </div>
                    <div class="switch-wrapper">
                        <div class="sun"></div>
                        <div class="toggle-wrapper">
                            <input id="switch" type="checkbox" />
                            <label for="switch" id="toggle">
                            Toggle
                            </label>
                        </div>
                        <div class="moon"></div>
                    </div>
                    
                </nav>
                <div id="weather-forecast"></div>
                <p class="mb-0" id="weather-detail">
                    Weather Detail
                </p>
                <ul class="weather-detail-list">
                    <li class="forecast-day mx-2 px-4 d-flex flex-column newbackground">
                        <p class="forecast-detail">Humidity</p>
                        <p>
                            <span id="humidityData" class="detail">{localCityWeather.cityHumidity}%</span>
                        </p>
                    </li>
                    <li class="forecast-day mx-2 px-3 d-flex flex-column newbackground">
                        <p class="forecast-detail">Temperature Max | Min</p>
                        <p class="max-min-temp">
                            <span class="material-symbols-outlined"> upgrade </span>:{" "}
                            <span id="max-temp">{localCityWeather.cityTempDayMax}</span>°C
                        </p>
                        <p class="max-min-temp">
                            <span class="material-symbols-outlined" id="minTempUnit">
                            {" "}
                            upgrade{" "}
                            </span>
                            : <span id="min-temp">{localCityWeather.cityTempDayMin}</span>°C
                        </p>
                    </li>
                    <li class="forecast-day mx-2 px-3 d-flex flex-column newbackground">
                        <p class="forecast-detail">Sunrise & Sunset</p>
                        <p>
                            <span class="material-symbols-outlined sunriseIcon">
                            {" "}
                            wb_twilight{" "}
                            </span>{" "}
                            <span id="sunRise" class="sunrise-set-time"></span>{" "}
                            <span class="timeUnit"></span>AM
                        </p>
                        <p>
                            <span class="material-symbols-outlined sunsetIcon">
                            {" "}
                            wb_twilight{" "}
                            </span>{" "}
                            <span id="sunSet" class="sunrise-set-time"></span>{" "}
                            <span class="timeUnit"></span>PM
                        </p>
                    </li>
                </ul>
                <ul class="weather-detail-list" id="secondList">
                    <li class="forecast-day mx-2 px-4 d-flex flex-column newbackground">
                        <p class="forecast-detail">Weather Description</p>
                        <p className="text-capitalize">
                            <span class="detail" id="weather-description">{localCityWeather.cityCondition}</span>
                        </p>
                    </li>
                    <li class="forecast-day mx-2 px-3 d-flex flex-column newbackground">
                        <p class="forecast-detail">Pressure</p>
                        <p>
                            <span id="weather-pressure" class="detail">{localCityWeather.cityPressure}</span> hPa
                        </p>
                    </li>
                    <li class="forecast-day mx-2 px-3 d-flex flex-column newbackground">
                        <p class="forecast-detail">Wind Speed</p>
                        <p class="speedDetial">
                            <span class="detail" id="windData">{localCityWeather.cityWind}</span> km/h
                        </p>
                    </li>
                </ul>
            </section>
         </div>
    )}else{
        let newUnit = "metric"
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