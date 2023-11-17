import React from "react";
import "./Locationdetails.css";

const details = [
  {
    image: "../assets/locations/desktop/image-map-canada.png", // Corrected path
    country: "Canada",
    officeName: "Designo Central Office",
    address: "3886 Wellington Street",
    cityState: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.ca", // Corrected email address
  },
  {
    image: "../assets/locations/desktop/image-map-australia.png", // Corrected path
    country: "Australia",
    officeName: "Designo AU Office",
    address: "19 Balonne Street",
    cityState: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.com.au", // Corrected email address
  },
  {
    image: "../assets/locations/desktop/image-map-united-kingdom.png", // Corrected path
    country: "United Kingdom", // Corrected misspelling
    officeName: "Designo UK Office",
    address: "13 Colorado Way",
    cityState: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@designo.uk",
  },
];

const Locationdetails = ({
  image,
  country,
  officeName,
  address,
  cityState,
  phone,
  email,
}) => {
  return (
    <div className="location-innercontainer">
      <div className="location-image">
        <img src={image} alt={`${country} office`} />
      </div>

      <div className="location-address">
        <h3>{country}</h3>
        <div className="location-flex">
          <span>{officeName}</span>
          <br />
          <p>{address}</p>
          <br />
          <p>{cityState}</p>
          <br />
          <p>{phone}</p>
          <br />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

const LocationList = () => {
  return (
    <div className="location-info">
      {details.map((location, index) => (
        <Locationdetails key={index} {...location} />
      ))}
    </div>
  );
};

export { Locationdetails, LocationList };
