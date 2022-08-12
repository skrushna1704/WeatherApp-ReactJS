import React from "react";
import "./ShowTemp.css";

let d = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();
let day = days[d.getDay()];

function ShowTemp({ data }) {
  return (
    <div className="container">
      <div className="city">
        <h2 className="city-name">
          <span>{data.name}</span>
          <sup>{data.country}</sup>
        </h2>
        <p>
          {date}/{month}/{year}/{day}
        </p>
        <div className="city-temp">
          {Math.round(data.temp)}
          <sup>&deg;C</sup>
        </div>
        <div className="minmax">
          <small>
            MaxTemp:-{data.temp_max}&MinTemp:-{data.temp_min}
          </small>
        </div>
        <p>Humadity:-{data.humidity}</p>
        <div className="info">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowTemp;
