import { Link, useLocation } from "react-router-dom";
import HeaderBasketWidget from "Components/HeaderBasketWidget/HeaderBasketWidget";
import { useSelector } from "react-redux";
import {
  totalSumBasketSelector,
  totalQuantityBasketSelector,
} from "Bus/Selectors/basketSelector";
import { EXCLUDE_BASKET_PASS } from "Constants/constants";
import logo from "Assets/img/logo.png";
import "Components/Header/header.css";

const Header = () => {
  const { pathname } = useLocation();
  const quantity = useSelector(totalQuantityBasketSelector);
  const sum = useSelector(totalSumBasketSelector);

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {pathname !== EXCLUDE_BASKET_PASS && (
          <Link to="/basket">
            <HeaderBasketWidget sum={sum} quantity={quantity} />
          </Link>
        )}
      </header>
    </>
  );
};

export default Header;
