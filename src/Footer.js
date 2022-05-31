import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="weather-forecast">Weather Forecast</div>
      <div className="created-by">
        The project was coded by
        <a
          href="https://www.lunasmithart.com/"
          target="_blank"
          alt="Luna Smith art"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          {" "}
          Luna Smith{" "}
        </a>
        and is
        <a
          href="https://github.com/Lu-Smith/Weather-app-by-Luna-Smith"
          target="_blank"
          alt="my GitHub"
          rel="noopener noreferrer"
          className="GitHub"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>
        <br /> and{" "}
        <a
          href="/"
          target="_blank"
          alt="my Netlify"
          rel="noopener noreferrer"
          className="Netlify"
        >
          {" "}
          hosted on Netlify
        </a>
      </div>
    </div>
  );
}
