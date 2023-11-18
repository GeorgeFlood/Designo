import "./contact.css";
import Navbar from "../components/Navbar";
import LocationBar from "../components/LocationBar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />

      <div className="form-container">
        <div className="form-text">
          <h3>Contact Us</h3>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="form-inputs">
          <form>
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>

            <div className="input-group">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <LocationBar />
      <Footer />
    </div>
  );
};

export default Contact;
