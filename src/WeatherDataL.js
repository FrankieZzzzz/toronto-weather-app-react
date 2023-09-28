import React from "react"
import MomentTime from "./MomentTime"

// import axios from "axios";

export default function WeatherDataL(props){
    return (
        <div>
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
        </div>
            
    )
}