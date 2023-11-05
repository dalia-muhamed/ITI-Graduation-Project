import logo from './logo.jpg';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="NavbarItems-container">
      <div className="container">
        <div className="row w-100">
          <div className="nav-left-side col-md-4 d-flex align-items-center mb-2">
            <div className="nav-logo-container">
              <img src={logo} className="logo" alt="logo" />
            </div>
            <h3 className="navbar-logo px-1 my-0 ">Travellia</h3>
          </div>
          <div className="col-md-4 nav-inner-side d-flex align-items-center mb-2 justify-content-center">
            <ul>
              <li>Discover</li>
              <li>Trip</li>
              <li>Community</li>
              <li>more</li>
            </ul>
          </div>
          <div className="nav-right-side col-md-4 d-flex align-items-center mb-2">
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
