import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [foreCast, setForeCast] = useState(null)


    function _getForecastData(response){
        setLoaded(true);
        setForeCast(response.data.daily);
    }
    if (loaded) {
        return(
            <div id="weather-forecast">
                <WeatherForecastDay dailyData={foreCast[0]}/>
            </div>
        )
    }else{
        let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
        let newUnit = "metric"
        let lat = props.cityCoord.lat;
        let lon = props.cityCoord.lon;
        let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${newUnit ? newUnit : "metric"}`
        axios.get(apiForecastUrl).then(_getForecastData);
    }
}