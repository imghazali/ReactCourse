import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={
              () => {
                setIsLoggedIn(isLoggedIn === "Login" ? "Logout" :"Login");
              }
            }>{isLoggedIn}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
