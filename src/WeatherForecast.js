import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  const [infoAvailable, setinfoAvailable] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
  }
  if (infoAvailable) {
    const apiKey = "0c0f164b5a01385a144a2eb362909b84";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    const apiUrl = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apiKey}$units=metric`;
    Axios.get(apiUrl).then(handleResponse);

    return null;
  } else {
    return (
      <div>
        <div className="row">
          <div className="col Weather-forecast">
            <div className="Forecast-day">Mon</div>
            <div className="weather-icon">
              <WeatherIcon code="01d" size={40} />
            </div>
            <div className="Forecast-temp">
              <span className="temp-max">20°</span>
              <span className="temp-min">19°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
