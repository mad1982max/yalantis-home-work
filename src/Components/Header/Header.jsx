import { Link } from "react-router-dom";
import "./header.css";
const logo = require("../../Shares/img/logo_.png");
const basket = require("../../Shares/img/basket.svg");

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img className="header-logo-img" src={logo.default} alt="logo" />
          </Link>
        </div>
        <div className="header-company-name">on-line shop</div>
        <div className="bascket-wrapper">
          <Link to={"/basket"}>
            <img src={basket.default} alt="basket" />
            <div className="basket-number">25</div>
            <div className="basket-value">1569$</div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
