import React from "react";
import "./Image.css";
import Thunder from "./media/thunderbyLunaSmith.jpg";

export default function Image() {
  let weatherData = {
    city: "New York",
    temperature: 20,
  };
  return (
    <div className="Image">
      <img src={Thunder} alt="thunder by Luna Smith" className="day-image" />
      <div className="row today-weather">
        <div className="col-3"></div>
        <div className="col-2">{weatherData.temperature}°C</div>
        <div className="col-7"></div>
      </div>
      <h2>{weatherData.city}</h2>
    </div>
  );
}
