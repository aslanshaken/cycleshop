import { NavLink } from "react-router-dom";
// import Nav from "../Nav/Nav";
import "./BrandLinks.css";

function BrandLinks() {
  return (
    <div className="brandlinks-logo">
      <NavLink to="/">
        <img src="https://www.freepnglogos.com/uploads/yamaha-png-logo/yamaha-sports-png-logo-5.png" />
      </NavLink>
      <NavLink to="/">
        <img src="http://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19701.png" />
      </NavLink>
      <NavLink to="/">
        <img src="https://www.freepnglogos.com/uploads/harley-davidson-png-logo/harley-davidson-png-logo-0.png" />
      </NavLink>
      <NavLink to="/">
        <img src="https://img.pngio.com/collection-of-14-free-ducati-logo-png-amusement-clipart-circus-ducati-logo-png-278_300.png" />
      </NavLink>
      <NavLink to="/">
        <img src="https://www.archmotorcycle.com/assets/images/logo.png" />
      </NavLink>
    </div>
  );
}

export default BrandLinks;
