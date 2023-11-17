import "./location.css";
import Navbar from "../components/Navbar";
import { Locationdetails, LocationList } from "../components/Locationdetails";
import Banner from "../components/banner";
import Footer from "../components/Footer";

const Location = () => {
  return (
    <div className="local-container">
      <Navbar />
      <LocationList />
      <Banner />
      <Footer />
    </div>
  );
};

export default Location;
