import React from "react"
import MomentTime from "./MomentTime"
import WeatherIconSet from "./WeatherIconSet";
import WeatherUnit from "./WeatherUnit"
import ImageApi from "./ImageApi"

// import axios from "axios";

export default function WeatherDataL(props){
    return (
        <div id="weather-left-info">
            {/* data display area */}
            <div id="current-location">
                <span id="current-city">{props.data.cityLocalName}</span>
                <span id="current-country">{props.data.cityCountry}</span>
            </div>
            <div id="weather-box">
                <WeatherIconSet iconset={props.data.cityIconSrc} alt={props.data.cityCondition} iconSize={80} />
            </div>
            <WeatherUnit tempC={props.data.cityTemp}/>
            <ul id="weather-box-left-detail" >
                <li>
                    <span className="material-symbols-outlined leftSideIcon"> {" "}sentiment_satisfied{" "}</span>
                    <span id="weather-feeling-temp" className=" weather-box-left-feel">Feels Like: {props.data.feelTemp}°C</span>
                </li>
                <li>
                    <span className="material-symbols-outlined leftSideIcon"> calendar_month </span>
                    <span>
                        <MomentTime date="MMM Do YY" time="h:mm:ss A"/>
                    </span>
                </li>
            </ul>
            <hr id="left-side-line" />
            <div className="weather-detail-img">
                <ImageApi cityName={props.data.cityLocalName}/>
            </div>
        </div>
            
    )
}