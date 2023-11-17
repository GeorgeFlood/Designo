import "./ourCompany.css";
import Navbar from "../components/Navbar";
import LocationBar from "../components/LocationBar";
import Banner from "../components/banner";
import Footer from "../components/Footer";
import aboutIMG from "../../assets/about/desktop/image-about-hero.jpg";
import worldClassTalent from "../../assets/about/desktop/image-world-class-talent.jpg";
import realDeal from "../../assets/about/desktop/image-real-deal.jpg";

const OurCompany = () => {
  return (
    <div className="comp-container">
      <Navbar />

      <header>
        <div className="comp__header--text">
          <h2>About Us</h2>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
        <div className="comp__header--img">
          <img src={aboutIMG} alt="about image" />
        </div>
      </header>

      <div className="comp normal">
        <div className="comp__img">
          <img src={worldClassTalent} alt="world class talent" />
        </div>
        <div className="comp__text">
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. Our team is multi-disciplinary and
            we are not merely interested in form — content and meaning are just
            as important. We give great importance to craftsmanship, service,
            and prompt delivery. Clients have always been impressed with our
            high-quality outcomes that encapsulates their brand’s story and
            mission.
          </p>
        </div>
      </div>

      <LocationBar gridRow="4 / 5" gridColumn="2 / 10" />

      <div className="comp reverse">
        <div className="comp__img">
          <img src={realDeal} alt="the real deal" />
        </div>
        <div className="comp__text">
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success. We are visual
            storytellers in appealing and captivating ways. By combining
            business and marketing strategies, we inspire audiences to take
            action and drive real results.
          </p>
        </div>
      </div>

      <Banner />
      <footer />
    </div>
  );
};

export default OurCompany;
