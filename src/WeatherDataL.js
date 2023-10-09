import React from "react"
import MomentTime from "./MomentTime"
import WeatherIconSet from "./WeatherIconSet";
import WeatherUnit from "./WeatherUnit"
import ImageApi from "./ImageApi"

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
            <ul id="weather-box-left-detail" >
                <li className="d-flex align-items-start">
                    <span className="material-symbols-outlined leftSideIcon pe-1"> {" "}sentiment_satisfied{" "}</span>
                    <span id="weather-feeling-temp">Feels Like: {props.data.feelTemp}°C</span>
                </li>
                <li className="d-flex align-items-start">
                    <span className="material-symbols-outlined leftSideIcon  pe-1">
                        {" "}
                        calendar_month{" "}
                    </span>
                    <span>
                        <MomentTime date="MMMM Do YYYY" time="h:mm:ss A"/>
                    </span>
                </li>
                <li id="weather-box-left-date">
                    <div id="current-date"></div>
                    <div className="time-zone" id="current-time"></div>
                </li>
            </ul>
            <hr id="left-side-line" />
            <div className="weather-detail-img">
                <ImageApi cityName={props.data.cityLocalName}/>
            </div>
        </div>
            
    )
}