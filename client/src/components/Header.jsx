// Importing Link from react-router-dom to use in place of <a> in our navbar. Comes with active class
import { useEffect } from "react";
import { Link } from "react-router-dom";
// Importing Materialize CSS from our npm module
import M from "materialize-css";

// Header component. A semantically built Navbar
export default function Header() {
  // useEffect necessary to ensure that Materialize JS runs as soon as component loads
  useEffect(() => {
    // Grab our sidenav element
    const sidenav = document.querySelector(".sidenav");
    if (sidenav) {
      M.Sidenav.init(sidenav, { edge: "left" }); // Initializes our sidenav w/ init()
    }
  }, []); // No dependecies, run once at start

  return (
    <header>
      <nav className="nav-wrapper blue">
        <div className="container">
          <Link to="/" className="brand-logo">
            lrnr
          </Link>
          {/* Hamburger menu that triggers sidebar in mobile */}
          <a
            role="button"
            className="sidenav-trigger left"
            data-target="mobile-links"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz Generation</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
      </ul>
    </header>
  );
}
