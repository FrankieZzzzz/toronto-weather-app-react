import React, {useState} from "react"
import axios from "axios";

export default function ImageApi(props){
    const [imgLink, setImgLink] = useState(props.cityName)
    let unsplashKey = "C3l2wm2Z54GRQ75bhadpUU5IvPQYrO5TeSJZJ3WkL48"
    let currentCity = props.cityName;
    let unsplashUrl = `https://api.unsplash.com/search/photos?&orientation=landscape&query=${currentCity}&client_id=${unsplashKey}`;
    axios.get(unsplashUrl).then(_displayImg)
   
    
    function _displayImg(response){
        setImgLink({
            imgLinkUrl: response.data.results[1].urls.full,
            imgDescribetion: response.data.results[1].description,
        })
    }
    return(
        <div>
            <img src={imgLink.imgLinkUrl} alt={imgLink.imgDescribetion} id="displayImgGalery" />
            <span id="insertCityName">{currentCity}</span>
        </div>

    )
}