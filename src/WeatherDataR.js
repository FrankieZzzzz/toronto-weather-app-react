import React from "react";

export default function weatherDataR(props){
    return(
        <div>
            <nav id="weather-box-right-top" >
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
            <ul class="weather-detail-list mb-3">
                <li class="forecast-day px-4 d-flex flex-column newbackground">
                    <p class="forecast-detail">Humidity</p>
                    <p>
                        <span id="humidityData" class="detail">{props.data.cityHumidity}%</span>
                    </p>
                </li>
                <li class="forecast-day px-3 d-flex flex-column newbackground">
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
                <li class="forecast-day px-3 d-flex flex-column newbackground">
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
                <li class="forecast-day px-4 d-flex flex-column newbackground">
                    <p class="forecast-detail">Weather Description</p>
                    <p className="text-capitalize">
                        <span class="detail" id="weather-description">{props.data.cityCondition}</span>
                    </p>
                </li>
                <li class="forecast-day px-3 d-flex flex-column newbackground">
                    <p class="forecast-detail">Pressure</p>
                    <p>
                        <span id="weather-pressure" class="detail">{props.data.cityPressure}</span> hPa
                    </p>
                </li>
                <li class="forecast-day px-3 d-flex flex-column newbackground">
                    <p class="forecast-detail">Wind Speed</p>
                    <p class="speedDetial">
                        <span class="detail" id="windData">{props.data.cityWind}</span> km/h
                    </p>
                </li>
            </ul>
        </div>
    )
}