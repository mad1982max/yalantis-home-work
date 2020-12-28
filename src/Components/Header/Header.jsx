import { Link } from "react-router-dom";
import { useContext } from "react";
import basketCTX from "../../Context/localContext";
import "./header.css";
const logo = require("../../Shares/img/logo.png");

const Header = () => {
  const { basket } = useContext(basketCTX);

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
            <div className="basket-number">
              {basket.length > 0
                ? basket.reduce((accum, item) => accum + item.quantity, 0)
                : 0}
            </div>

            <div className="basket-value">
              {basket.length > 0
                ? basket.reduce(
                    (sum, product) => sum + product.price * product.quantity,
                    0
                  ) + " $"
                : ""}
            </div>
          </div>
        </Link>
      </header>
    </>
  );
};

export default Header;
