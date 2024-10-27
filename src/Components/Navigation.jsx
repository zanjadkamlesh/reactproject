import "../Style/Layout.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navigation(props) {
  return (
    <>
      <ul className="navLink">
        <li> <Link to="/"  >Home   </Link></li>
        <li> <Link to="/about"  >About   </Link></li>
        <li> <Link to="/doctor"  >Doctor  </Link></li>
        <li> <Link to="/patient"  > Patients   </Link></li>
        <li> <Link to="/appointment"  >Appointment   </Link></li>
      </ul>
    </>
  );
}
