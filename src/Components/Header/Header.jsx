import { Link, useLocation } from "react-router-dom";
import HeaderBasketWidget from "../HeaderBasketWidget/HeaderBasketWidget";
import "./header.css";
import { pathWithoutBasketWidget } from "../../Shares/config";
const logo = require("../../Shares/img/logo.png");

const Header = () => {
  const currentPath = useLocation().pathname;

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img src={logo.default} alt="logo" />
          </Link>
        </div>
        {currentPath !== pathWithoutBasketWidget && (
          <Link to={"/basket"}>
            <HeaderBasketWidget />
          </Link>
        )}
      </header>
    </>
  );
};

export default Header;
