import React from "react"
import MomentTime from "./MomentTime"
import SearchEngine from "./SearchEngine"

// import axios from "axios";

export default function WeatherData(props){
    return (
        <div class="container row mx-auto p-0 mt-5">
            <section id="weather-box-left" className="col-lg-3 mt-3">
                {/* seperate search engine */}
                <SearchEngine />
                {/* data display area */}
                <div id="current-location">
                    <span id="current-city">{props.data.cityLocalName}</span>
                    <span id="current-country">{props.data.cityCountry}</span>
                </div>
                <img src={props.data.cityIconSrc} alt="heroImg" id="weather-box-left-img" />
                <ul class="fw-light d-flex" id="temp-list">
                    <li id="main-temp">{props.data.cityTemp}</li>
                    <li><span class="temp">|</span></li>
                </ul>
                <ul id="weather-box-left-detail" class="pt-2">
                    <li class="pt-4">
                        <span class="material-symbols-outlined leftSideIcon">
                            {" "}
                            sentiment_satisfied{" "}
                        </span>{" "}
                        Feels Like: {props.data.feelTemp}<span id="weather-feeling-temp"></span>°
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
                        <span class="cnBtn">Weather in {props.data.cityLocalName}</span>
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
                            <span id="humidityData" class="detail">{props.data.cityHumidity}%</span>
                        </p>
                    </li>
                    <li class="forecast-day mx-2 px-3 d-flex flex-column newbackground">
                        <p class="forecast-detail">Temperature Max | Min</p>
                        <p class="max-min-temp">
                            <span class="material-symbols-outlined"> upgrade </span>:{" "}
                            <span id="max-temp">{props.data.cityTempDayMax}</span>°C
                        </p>
                        <p class="max-min-temp">
                            <span class="material-symbols-outlined" id="minTempUnit">
                            {" "}
                            upgrade{" "}
                            </span>
                            : <span id="min-temp">{props.data.cityTempDayMin}</span>°C
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
                            <span class="detail" id="weather-description">{props.data.cityCondition}</span>
                        </p>
                    </li>
                    <li class="forecast-day mx-2 px-3 d-flex flex-column newbackground">
                        <p class="forecast-detail">Pressure</p>
                        <p>
                            <span id="weather-pressure" class="detail">{props.data.cityPressure}</span> hPa
                        </p>
                    </li>
                    <li class="forecast-day mx-2 px-3 d-flex flex-column newbackground">
                        <p class="forecast-detail">Wind Speed</p>
                        <p class="speedDetial">
                            <span class="detail" id="windData">{props.data.cityWind}</span> km/h
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    )
}