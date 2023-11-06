import logo from "./logo.jpg";
import "./navbar.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useEffect } from "react";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [hasLogged, setHasLogged] = useState(false);

  // useEffect(() => {
  //   const userHasLogged = localStorage.getItem('hasLogged');
  //   setHasLogged(userHasLogged === 'true');

  //   window.onbeforeunload = () => {
  //     localStorage.removeItem('hasLogged');
  //   };
  // }, []);

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

  return (
    <GoogleOAuthProvider clientId="165093153283-shjo35g4u2vh5tughu7i1ei04eaq4urc.apps.googleusercontent.com">
      <nav className="NavbarItems-container">
        <div className="container">
          <div className="row w-100">
            <div className="nav-left-side col-md-4  my-1">
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
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
            <div className="nav-right-side col-md-4 d-flex align-items-center mb-2">
              {!hasLogged && <GoogleLogin onSuccess={handleLoginSuccess} />}
              {hasLogged && (
                <img
                  style={{
                    position: "absolute",
                    right: "70px",
                    top: "7px",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  src={imageSrc}
                  alt="dad"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </GoogleOAuthProvider>
  );
};

export default Navbar;
