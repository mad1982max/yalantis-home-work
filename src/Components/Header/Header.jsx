import { Link, useLocation } from "react-router-dom";
import HeaderBasketWidget from "../HeaderBasketWidget/HeaderBasketWidget";
import "./header.css";
const logo = require("../../Shares/img/logo.png");

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img src={logo.default} alt="logo" />
          </Link>
        </div>
        <Link to={"/basket"}>
          <HeaderBasketWidget />
        </Link>
      </header>
    </>
  );
};

export default Header;
