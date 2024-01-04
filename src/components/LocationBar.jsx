import React from "react";
import "./locationBar.css";

import canada from "../../assets/shared/desktop/illustration-canada.svg";
import australia from "../../assets/shared/desktop/illustration-australia.svg";
import uk from "../../assets/shared/desktop/illustration-united-kingdom.svg";

const locations = [
  {
    name: "CANADA",
    image: canada,
    alt: "Canada illustration",
  },
  {
    name: "Australia",
    image: australia,
    alt: "Australia illustration",
  },
  {
    name: "United Kingdom",
    image: uk,
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
