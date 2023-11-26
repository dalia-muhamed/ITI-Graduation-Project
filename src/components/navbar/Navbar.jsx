import logo from "./logo.png";
import "./navbar.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useEffect } from "react";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdBookmarkAdded } from "react-icons/md";

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
        className={`navbar navbar-expand-lg fixed-top ${
          isSticky ? "sticky" : ""
        } ${navbarItem} ${myClass}`}
        style={{ height: "60px" }}
      >
        <div className="container-fluid">
          <nav class="navbar bg-transparent fixed-top d-lg-none NavbarItems-container">
            <div className="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="d-flex">
                <Link
                  to="/Favourites"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <MdBookmarkAdded
                    color="#00AA6C"
                    size={40}
                    style={{ marginRight: "10px", marginTop: "6px" }}
                  />
                  {/* <FontAwesomeIcon icon={faBookmark} className="shoppingCart" /> */}
                </Link>
                <Link
                  to="/"
                  style={{ color: "black", textDecoration: "none" }}
                  onClick={handleLinkClick}
                  className="navbar-brand"
                >
                  <div className="d-flex align-items-center">
                    <div className="nav-logo-container">
                      <img src={logo} className="logo" alt="logo" />
                    </div>
                  </div>
                </Link>
              </div>

              <div
                className="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-body d-flex">
                  <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Discover
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Trip
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Community
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        More
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn-close mt-2"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </nav>
          <div
            className="offcanvas offcanvas-start container navbar-row"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="row w-100 ">
              <div className="nav-left-side col-md-4  my-1">
                <Link
                  to="/"
                  style={{ color: "black", textDecoration: "none" }}
                  onClick={handleLinkClick}
                  className="navbar-brand"
                >
                  <div className="d-flex align-items-center">
                    <div className="nav-logo-container">
                      <img src={logo} className="logo" alt="logo" />
                    </div>
                    <h3 className="navbar-logo px-1 my-0">Travellia</h3>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 nav-inner-side d-flex  align-items-center my-1 justify-content-center">
                <ul className="navbar-nav d-flex flex-row">
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      Discover
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      Trip
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      Community
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      More
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-right-side col-md-4 d-flex align-items-center  my-1">
                <Link
                  to="/Favourites"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <MdBookmarkAdded
                    color="#00AA6C"
                    size={40}
                    style={{ marginRight: "10px" }}
                  />
                  {/* <FontAwesomeIcon icon={faBookmark} className="shoppingCart" /> */}
                </Link>
                {!hasLogged && <GoogleLogin onSuccess={handleLoginSuccess} />}
                {hasLogged && (
                  <div className="d-flex justify-content-center align-items-center ps-lg-3">
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "45px",
                        height: "45px",
                      }}
                      src={imageSrc}
                      alt="dad"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </GoogleOAuthProvider>
  );
};

export default Navbar;
