import axios from "axios";
import React, { useState } from "react";
import ShowTemp from "./component/ShowTemp";
import "./App.css";

const API = "d0050f1d27bfc58e62b76836c46cd96f";
const App = () => {
  const [city, setCity] = useState("Pune");
  const [data, setData] = useState({
    main: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    name: "",
    country: "",
  });
  const inputHandler = (e) => {
    setCity(e.target.value);
  };
  const handleClick = (e) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
      )
      .then((response) => {
        console.log(response);

        setData({
          description: response.data.weather[0].main,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          name: response.data.name,
          country: response.data.sys.country,
        });
      });
  };
  return (
    <>
      <div className="conatiner text-center weather-bg">
        <h1>Weather Report</h1>
        <input
          type="text"
          className="formControl"
          value={city}
          onChange={inputHandler}
        />
        <button
          className="btn btn-primary mx-2"
          type="submit"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <ShowTemp data={data} />
    </>
  );
};

export default App;
