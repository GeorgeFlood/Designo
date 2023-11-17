import React from "react";
import "./locationBar.css";

const locations = [
  {
    name: "CANADA",
    image: "../../assets/shared/desktop/illustration-canada.svg",
    alt: "Canada illustration",
  },
  {
    name: "Australia",
    image: "../../assets/shared/desktop/illustration-australia.svg",
    alt: "Australia illustration",
  },
  {
    name: "United Kingdom",
    image: "../../assets/shared/desktop/illustration-united-kingdom.svg",
    alt: "United Kingdom illustration",
  },
];

const Location = ({ image, name, alt }) => (
  <div className="locations">
    <img src={image} alt={alt} />
    <h3>{name}</h3>
    <button>See Location</button>
  </div>
);

const LocationBar = ({ gridRow, gridColumn }) => (
  <div className="locationBar" style={{ gridRow, gridColumn }}>
    {locations.map((location, index) => (
      <Location key={index} {...location} />
    ))}
  </div>
);

export default LocationBar;
