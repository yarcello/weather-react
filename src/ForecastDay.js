import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    const date = new Date(props.data.dt * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="weather-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="Forecast-temp">
        <span className="temp-max">{Math.round(props.data.temp.max)}°</span>
        <span className="temp-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
