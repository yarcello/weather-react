import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherData from "./WeatherData.js";
import { Oval } from "react-loader-spinner";

export default function WeatherApp(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = `0efb4fc16a9ed98dc0b3aafd8491d6ad`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div>
        <div className="WeatherApp">
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type your city..."
                  className="searchInput form-control"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="searchButton btn btn-primary"
                />
              </div>
            </div>
          </form>
          <WeatherData data={weather} />
        </div>
        <footer>
          This page was coded by Yaro Trofymchuk and is{" "}
          <a href="https://github.com/yarcello/weather-react.git">
            Open source
          </a>{" "}
        </footer>
      </div>
    );
  } else {
    search();
    return (
      <div className="spinner">
        <Oval
          height={80}
          width={80}
          color="white"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="darkgrey"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}
