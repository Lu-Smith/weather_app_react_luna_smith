import React from "react";
import "./SunriseSunset.css";

import Sun from "./media/sunbyLunaSmith.png";
import Moon from "./media/moonbyLunaSmith.png";

export default function SunriseSunset() {
  return (
    <div className="SunriseSunset">
      <div className="row top">
        <div className="col-3">
          <img
            src={Sun}
            alt="sun emoji by Luna
  Smith"
            className="sun"
          />
          <div className="sunrise">6:56</div>
        </div>
        <div className="col-6 day-celebration">
          <h1>Pancake Day 🥞</h1>
        </div>
        <div className="col-3">
          <img src={Moon} alt="moon emoji by Luna Smith" className="moon" />
          <div className="sunset">20:42</div>
        </div>
      </div>
    </div>
  );
}
