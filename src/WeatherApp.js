import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [city, setCity] = useState(" ");
  let [weather, setWeather] = useState(" ");

  function displayWeather(response) {
    console.log(response);
    setWeather({
      cityname: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `0efb4fc16a9ed98dc0b3aafd8491d6ad`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div className="container weatherPage">
        <div className="row">
          <form onSubmit={handleSubmit} className="searchForm">
            <input
              type="search"
              placeholder="Type your city..."
              onChange={updateCity}
              className="searchInput"
            />
            <input type="submit" value="search" className="searchButton" />
          </form>
        </div>

        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                It is currently <strong>{weather.temp}°C</strong> in{" "}
                {weather.cityname}
              </li>
              <li>{weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
          <div className="col-6">
            {" "}
            <div className="icon">
              <img src={weather.icon} alt={weather.description} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/yarcello/weather-react.git">Open source</a>{" "}
        by Yaro Trofymchuk
      </div>
    </div>
  );
}
