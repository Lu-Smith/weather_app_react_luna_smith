import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <input
        type="search"
        placeholder="Enter your city"
        className="inside-form"
      />
      <button type="submit" className="inside-form">
        🔍
      </button>
      <button className="my-city">My City</button>
    </form>
  );
}
