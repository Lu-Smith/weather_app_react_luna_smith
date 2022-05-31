import React from "react";
import "./App.css";
import SunriseSunset from "./SunriseSunset";
import SearchForm from "./SearchForm";
import ConvertDegree from "./ConvertDegree";
import Image from "./Image";
import ForecastTable from "./ForecastTable";

export default function App() {
  return (
    <div className="App">
      <SunriseSunset />
      <section className="main-content">
        <SearchForm />
        <ConvertDegree />
        <Image />
        <ForecastTable />
      </section>
    </div>
  );
}
