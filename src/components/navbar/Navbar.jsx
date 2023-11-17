import logo from "./logo.jpg";
import "./navbar.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useEffect } from "react";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ sticky, myClass, navbarItem }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [hasLogged, setHasLogged] = useState(false);

  // useEffect(() => {
  //   const userHasLogged = localStorage.getItem("hasLogged");
  //   setHasLogged(userHasLogged === "true");

  //   window.onbeforeunload = () => {
  //     localStorage.removeItem("hasLogged");
  //   };
  // }, []);

  const [isSticky, setIsSticky] = useState(sticky);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hasLoggedValue = localStorage.getItem("hasLogged");
    if (hasLoggedValue === "true") {
      setHasLogged(true);
      const userImage = localStorage.getItem("userImage");
      if (userImage) {
        setImageSrc(userImage);
      }
    }
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    setImageSrc(credentialResponseDecoded.picture);
    localStorage.setItem("hasLogged", "true");
    localStorage.setItem("userImage", credentialResponseDecoded.picture);
    setHasLogged(true);
  };
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GoogleOAuthProvider clientId="165093153283-shjo35g4u2vh5tughu7i1ei04eaq4urc.apps.googleusercontent.com">
      <nav
        id="navbar"
        className={` ${navbarItem} ${isSticky ? "sticky" : myClass}`}
      >
        <div className="container navbar-row">
          <div className="row w-100 ">
            <div className="nav-left-side col-md-4  my-1">
              <Link
                to="/"
                style={{ color: "black", textDecoration: "none" }}
                onClick={handleLinkClick}
              >
                <div className="d-flex align-items-center">
                  <div className="nav-logo-container">
                    <img src={logo} className="logo" alt="logo" />
                  </div>
                  <h3 className="navbar-logo px-1 my-0">Travellia</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-4 nav-inner-side d-flex align-items-center my-1 justify-content-center">
              <ul>
                <li>Discover</li>
                <li>Trip</li>
                <li>Community</li>
                <li>more</li>
              </ul>
            </div>
            <div className="nav-right-side col-md-4 d-flex align-items-center  my-1">
              {!hasLogged && <GoogleLogin onSuccess={handleLoginSuccess} />}
              {hasLogged && (
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                    src={imageSrc}
                    alt="dad"
                  />
                </div>
              )}
              <Link
                to="/Favourites"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <FontAwesomeIcon icon={faBookmark} className="shoppingCart" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </GoogleOAuthProvider>
  );
};

export default Navbar;
