import React from "react";
import Switch from "./Switch"
import WeatherForecast from "./WeatherForecast"

export default function weatherDataR(props){
    return(
        <div>
            <nav id="weather-box-right-top" >
                <p id="brand-logo-name">Toronto Forecast</p>
                <div className="right-top-small-title">
                    <i className="fa-solid fa-location-dot"id="getCurrentLocation"> </i>
                    <span className="cnBtn"> Weather in {props.data.cityLocalName}</span>
                    <span className="inputLocation"></span>
                </div>
                <Switch />
            </nav>
            <WeatherForecast cityCoord={props.coordinates}/>
            <p id="weather-detail"> Weather Detail </p>
            <ul className="weather-detail-list">
                <li className="forecast-day ">
                    <p className="forecast-detail">Humidity</p>
                    <p className="unit content">
                        <span id="forecast-detail-data" className="detail">{props.data.cityHumidity}%</span>
                    </p>
                </li>
                <li className="forecast-day ">
                    <p className="forecast-detail">Temperature Max | Min</p>
                    <div className="content">
                        <p className="max-min-temp unit">
                            <span className="material-symbols-outlined detail-icon"> upgrade </span>:{" "}
                            <span id="forecast-detail-data" className="detail">{props.data.cityTempDayMax}</span>°C
                        </p>
                        <p className="max-min-temp unit">
                            <span className="material-symbols-outlined detail-icon" id="minTempUnit">upgrade</span>
                            : <span id="min-temp" className="detail">{props.data.cityTempDayMin}</span>°C
                        </p>
                    </div>
                </li>
                <li className="forecast-day newbackground">
                    <p className="forecast-detail">Sunrise & Sunset</p>
                    <div className="content">
                        <p>
                            <span className="material-symbols-outlined sunriseIcon detail-icon">
                            {" "}
                            wb_twilight{" "}
                            </span>{" "}
                            <span id="sunRise" className="sunrise-set-time"></span>{" "}
                            <span className="timeUnit detail">{props.data.sunRiseTime}</span><span className="unit">AM</span>
                        </p>
                        <p>
                            <span className="material-symbols-outlined sunsetIcon detail-icon">
                            {" "}
                            wb_twilight{" "}
                            </span>{" "}
                            <span id="sunSet" className="sunrise-set-time"></span>{" "}
                            <span className="timeUnit detail">{props.data.sunSetTime}</span><span className="unit">PM</span>
                        </p>
                    </div>
                </li>
            </ul>
            <ul className="weather-detail-list">
                <li className="forecast-day ">
                    <p className="forecast-detail">Weather Description</p>
                    <p className="text-capitalize unit content">
                        <span className="detail" id="weather-description">{props.data.cityCondition}</span>
                    </p>
                </li>
                <li className="forecast-day ">
                    <p className="forecast-detail">Pressure</p>
                    <p className="unit content">
                        <span id="weather-pressure" className="detail">{props.data.cityPressure}</span> hPa
                    </p>
                </li>
                <li className="forecast-day ">
                    <p className="forecast-detail">Wind Speed</p>
                    <p className="speedDetial unit content">
                        <span className="detail" id="windData">{props.data.cityWind}</span> km/h
                    </p>
                </li>
            </ul>
        </div>
    )
}