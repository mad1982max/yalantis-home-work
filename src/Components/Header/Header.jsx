import { Link } from "react-router-dom";
import "./header.css";
const logo = require("../../Shares/img/logo_.png");

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
          <div className="basket-wrapper">
            <div className="basket-number">5</div>
            {/* <div className="basket-value">1569$</div> */}
          </div>
        </Link>
      </header>
    </>
  );
};

export default Header;
