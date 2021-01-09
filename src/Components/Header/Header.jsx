import { Link, useLocation } from "react-router-dom";
import HeaderBasketWidget from "Components/HeaderBasketWidget/HeaderBasketWidget";
import { pathWithoutBasketWidget } from "Shares/config";
import logo from "Shares/img/logo.png";
import "Components/Header/header.css";

const Header = () => {
  const currentPath = useLocation().pathname;

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
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
