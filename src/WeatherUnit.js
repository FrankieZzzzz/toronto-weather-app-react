import React, {useState} from "react";

export default function WeatherUnit(props){
    const [unit, setUnit] = useState("cel")
    function _unitConvert(event){
        event.preventDefault();
        setUnit("fah")
    }


    function _unitConvertBack(event){
        event.preventDefault();
        setUnit("cel")


    }
    if (unit === "cel"){
        return(
        <div id="temp-list">
            <span id="main-temp">{props.tempC}</span>
            <span className="temp temp-unit">°C | <a href="/" onClick={_unitConvert} >°F</a></span>
        </div>
    )
    }else{
        return(
        <div id="temp-list">
            <span id="main-temp">{Math.round((props.tempC * 9) / 5 + 32)}</span>
            <span className="temp temp-unit"><a href="/" onClick={_unitConvertBack}>°C </a> | °F</span>
        </div>
        )
    }
    
}