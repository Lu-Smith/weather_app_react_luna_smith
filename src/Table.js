import React from "react";
import "./Table.css";

import BrokenClouds from "./media/brokencloudsbyLunaSmith.png";

export default function Table() {
  let weatherData = {
    hour: "10:00",
    temperature: 20,
    wind: 16,
    humidity: 78,
    imgUrl: BrokenClouds,
    description: "Broken Clouds",
  };
  return (
    <div className="Table">
      <div className="row forecast">
        <div className="col-3 day today">
          <div className="main">
            <button className="button-day button-today">Today</button>
          </div>
          <div className="table-details">
            <div>{weatherData.hour}</div>
            <div>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="emoji"
              />
            </div>
            <div>{weatherData.temperature}°C</div>
            <div>
              🍃<span>{weatherData.wind}</span>
            </div>
            <div>
              💧
              <span>{weatherData.humidity}</span>%
            </div>
          </div>
        </div>
        <div className="col day"></div>
      </div>
    </div>
  );
}
