import React from "react";
import "./Locationdetails.css";

const details = [
  {
    image: "../assets/locations/desktop/image-map-canada.png",
    country: "Canada",
    officeName: "Designo Central Office",
    address: "3886 Wellington Street",
    cityState: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.ca",
  },
  {
    image: "../assets/locations/desktop/image-map-australia.png",
    country: "Australia",
    officeName: "Designo AU Office",
    address: "19 Balonne Street",
    cityState: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.com.au",
  },
  {
    image: "../assets/locations/desktop/image-map-united-kingdom.png",
    country: "United Kingdom",
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
  reverse,
}) => {
  const containerClass = reverse
    ? "location-innercontainer location-innercontainer-reverse"
    : "location-innercontainer";
  return (
    <div className={containerClass}>
      <div className="location-image">
        <img src={image} alt={`${country} office`} />
      </div>

      <div className="location-address">
        <div className="location-flex-right">
          <h3>{country}</h3>
          <span>{officeName}</span>
          <p>{address}</p>
          <p>{cityState}</p>
        </div>
        <div className="location-flex-left">
          <span>Contact</span>

          <p>P : {phone}</p>

          <p>M : {email}</p>
        </div>
      </div>
    </div>
  );
};

const LocationList = () => {
  return (
    <div className="location-info">
      {details.map((location, index) => (
        <Locationdetails key={index} {...location} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

export { Locationdetails, LocationList };
