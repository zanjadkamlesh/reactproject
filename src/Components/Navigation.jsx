import "../Style/Layout.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navigation(props) {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-left">
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to="/" className="nav-link" style={{ border: 5 }}>
                Home{" "}
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/about" className="nav-link">
                About{" "}
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/doctor" className="nav-link">
                Doctor{" "}
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/patient" className="nav-link">
                {" "}
                Patients{" "}
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/appointment" className="nav-link">
                Appointment{" "}
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/systemadmin" className="nav-link">
                System Admin
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/register" className="nav-link">
               Register
              </Link>
            </li>
            {/* <div id="nav-right">
              <button className="nav-button">Login</button>
              <button className="nav-button">Register</button>
            </div> */}
          </ul>
         
        </div>
      </div>
    </>
  );
}
