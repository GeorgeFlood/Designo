import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img src="../../assets/shared/desktop/logo-dark.png" alt="Logo" />
      <nav className="navbar">
        <li>Our company</li>
        <li>Location</li>
        <li>Contact</li>
      </nav>
    </div>
  );
};

export default Navbar;
