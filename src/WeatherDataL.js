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
            <ul id="weather-box-left-detail" className="pt-2">
                <li className="pt-4">
                    <span className="material-symbols-outlined leftSideIcon">
                        {" "}
                        sentiment_satisfied{" "}
                    </span>{" "}
                    Feels Like: {props.data.feelTemp}<span id="weather-feeling-temp"></span>°C
                </li>
                <li className="d-flex ">
                    <span className="material-symbols-outlined leftSideIcon">
                        {" "}
                        calendar_month{" "}
                    </span>
                    <div className="mt-1 ms-1">
                        <MomentTime date="MMMM Do YYYY" time="h:mm:ss A"/>
                    </div>
                </li>
                <li id="weather-box-left-date">
                    <div id="current-date"></div>
                    <div className="time-zone" id="current-time"></div>
                </li>
            </ul>
            <hr id="left-side-line" />
            <div className="weather-detail-img">
                <ImageApi cityName={props.data.cityLocalName}/>
                <span id="insertCityName"></span>
            </div>
        </div>
            
    )
}