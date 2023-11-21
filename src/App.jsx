import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/home";
import OurCompany from "./pages/OurCompany";
import Location from "./pages/Location";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<OurCompany />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
