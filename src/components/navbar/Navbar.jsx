import logo from './logo.jpg';
import './navbar.css';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import onSuccess from '../GoogleLogin/OnSuccess';
import onError from '../GoogleLogin/OnError';

const Navbar = () => {
  return (
    <GoogleOAuthProvider clientId="165093153283-shjo35g4u2vh5tughu7i1ei04eaq4urc.apps.googleusercontent.com">
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
              <GoogleLogin onSuccess={onSuccess} onError={onError} />
            </div>
          </div>
        </div>
      </nav>
    </GoogleOAuthProvider>
  );
};

export default Navbar;
