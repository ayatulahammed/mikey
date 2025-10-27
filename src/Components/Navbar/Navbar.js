import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="">
        <div className="container header">
          <div className="logo">Mikey</div>

          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <Link className="main-nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="main-nav-link" to="/about">
                  About me
                </Link>
              </li>
              <li>
                <Link className="main-nav-link" to="/my blog">
                  My Work
                </Link>
              </li>
              <li>
                <Link className="main-nav-link" to="#">
                  My Skills
                </Link>
              </li>
              <li>
                <Link className="main-nav-link" to="#">
                  Contact me
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="social-icons">
            <li>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-vimeo"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
