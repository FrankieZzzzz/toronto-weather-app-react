import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherData from "./WeatherData"

export default function _weather(){
    //search for city data
    // const [triggle, setTriggle] = useState(false)
    //simplify the code, insert variable to useState
    const apiKey = "c5f0e59acac64258bb92ed027d20c68f";
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
        <div>
            {/* Whole html return */}
            <WeatherData data={localCityWeather}/>
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