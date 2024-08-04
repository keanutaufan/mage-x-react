import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">taufan.</Link>
      <Link to="/about" className="navbar__link">About Me</Link>
    </div>
  );
}