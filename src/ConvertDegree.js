import React from "react";
import "./ConvertDegree.css";

export default function ConvertDegree() {
  return (
    <div className="ConvertDegree">
      <div className="degree-choice">
        <button className="degree fahrenheit">F</button>
        <button className="degree celsius">C</button>
      </div>
    </div>
  );
}
