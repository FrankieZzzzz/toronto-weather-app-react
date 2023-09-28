import React from "react"
import MomentTime from "./MomentTime"
import WeatherIconSet from "./WeatherIconSet";
import WeatherUnit from "./WeatherUnit"

// import axios from "axios";

export default function WeatherDataL(props){
    return (
        <div>
            {/* data display area */}
            <div id="current-location">
                <span id="current-city">{props.data.cityLocalName}</span>
                <span id="current-country">{props.data.cityCountry}</span>
            </div>
            <div id="weather-box">
                <WeatherIconSet iconset={props.data.cityIconSrc} alt={props.data.cityCondition}/>
            </div>
            <WeatherUnit tempC={props.data.cityTemp}/>
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
        </div>
            
    )
}