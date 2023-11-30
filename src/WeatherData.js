import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
  return (
    <div>
      <div className="container weatherPage">
        <div className="row mainInfo">
          <h1 className="mb-0">{props.data.city}</h1>
          <div className="time">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <WeatherIcon code={props.data.icon} />
            <span className="degrees">{props.data.temp}</span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
