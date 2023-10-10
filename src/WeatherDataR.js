import React from "react";
import Switch from "./Switch"

export default function weatherDataR(props){
    return(
        <div>
            <nav id="weather-box-right-top" >
                <p className="col-5" id="brand-logo-name">Toronto Forecast</p>
                <div className="col-lg-4 right-top-small-title">
                    <i className="col-0 pe-2 fa-solid fa-location-dot"id="getCurrentLocation"></i>
                    <span className="cnBtn">Weather in {props.data.cityLocalName}</span>
                    <span className="inputLocation"></span>
                </div>
                <Switch />
            </nav>
            <div id="weather-forecast"></div>
            <p className="mb-0" id="weather-detail">
                Weather Detail
            </p>
            <ul className="weather-detail-list mb-1 d-flex flex-lg-row">
                <li className="forecast-day px-3 d-flex flex-column newbackground">
                    <p className="forecast-detail">Humidity</p>
                    <p>
                        <span id="humidityData" className="detail">{props.data.cityHumidity}%</span>
                    </p>
                </li>
                <li className="forecast-day px-3 d-flex flex-column newbackground">
                    <p className="forecast-detail">Temperature Max | Min</p>
                    <p className="max-min-temp">
                        <span className="material-symbols-outlined"> upgrade </span>:{" "}
                        <span id="max-temp">{props.data.cityTempDayMax}</span>°C
                    </p>
                    <p className="max-min-temp">
                        <span className="material-symbols-outlined" id="minTempUnit">
                        {" "}
                        upgrade{" "}
                        </span>
                        : <span id="min-temp">{props.data.cityTempDayMin}</span>°C
                    </p>
                </li>
                <li className="forecast-day px-3 d-flex flex-column newbackground">
                    <p className="forecast-detail">Sunrise & Sunset</p>
                    <p>
                        <span className="material-symbols-outlined sunriseIcon">
                        {" "}
                        wb_twilight{" "}
                        </span>{" "}
                        <span id="sunRise" className="sunrise-set-time"></span>{" "}
                        <span className="timeUnit">{props.data.sunRiseTime}</span><span className="timeUnit_ampm">AM</span>
                    </p>
                    <p>
                        <span className="material-symbols-outlined sunsetIcon">
                        {" "}
                        wb_twilight{" "}
                        </span>{" "}
                        <span id="sunSet" className="sunrise-set-time"></span>{" "}
                        <span className="timeUnit">{props.data.sunSetTime}</span><span className="timeUnit_ampm">PM</span>
                    </p>
                </li>
            </ul>
            <ul className="weather-detail-list d-flex flex-lg-row" id="secondList">
                <li className="forecast-day px-3 d-flex flex-column newbackground">
                    <p className="forecast-detail">Weather Description</p>
                    <p className="text-capitalize">
                        <span className="detail" id="weather-description">{props.data.cityCondition}</span>
                    </p>
                </li>
                <li className="forecast-day px-3 d-flex flex-column newbackground">
                    <p className="forecast-detail">Pressure</p>
                    <p>
                        <span id="weather-pressure" className="detail">{props.data.cityPressure}</span> hPa
                    </p>
                </li>
                <li className="forecast-day px-3 d-flex flex-column newbackground">
                    <p className="forecast-detail">Wind Speed</p>
                    <p className="speedDetial">
                        <span className="detail" id="windData">{props.data.cityWind}</span> km/h
                    </p>
                </li>
            </ul>
        </div>
    )
}