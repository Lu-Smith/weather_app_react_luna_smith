import React from "react";
import "./ForecastTable.css";
import Table from "./Table";
import Footer from "./Footer";

export default function ForecastTable() {
  let weatherData = {
    day: "Thursday",
    date: "25th",
    month: "April",
    year: 2022,
  };
  return (
    <div className="ForecastTable">
      <Table />
      <br />

      <div className="date">
        Today is <span class="highlightDay"> {weatherData.day}</span>,{" "}
        {weatherData.date} of
        {weatherData.month} {weatherData.year}
      </div>
      <div className="row footnote">
        <div className="col">🍃- wind [kmph]</div>
        <div className="col">💧- humidity</div>
      </div>
      <Footer />
    </div>
  );
}
