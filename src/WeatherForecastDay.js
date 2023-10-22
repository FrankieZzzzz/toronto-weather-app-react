import React from "react";
import WeatherIconSet from "./WeatherIconSet";


export default function _weatherForecastDay(props){
    // return max temp
    function _maxTemp(){
        let maxTemp = Math.round(props.dailyData.temp.max);
        return(maxTemp)
    }
    // return min temp
    function _minTemp(){
        let minTemp = Math.round(props.dailyData.temp.min);
        return(minTemp)
    }
    // return date
    function _date(){
        let date = new Date(props.dailyData.dt * 1000);
        let day = date.getDay();

        let dayNumber = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return dayNumber[day]
    }

    return(
        <div className="forecast-seven-day ">
            <div id="forecast-seven-day-detail">   
                <p>{_date()}</p>
                <WeatherIconSet iconset={props.dailyData.weather[0].icon} size={"38"}/>
            </div>
            <div id="weather-forecast-temp">
                <span id="weather-temp-max">{_maxTemp()}°C</span> |
                <span id="weather-temp-min"> {_minTemp()}°C</span>
            </div>
        </div>
    )
}