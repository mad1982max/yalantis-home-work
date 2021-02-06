import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HeaderBasketWidget from "Components/HeaderBasketWidget/HeaderBasketWidget";
import PortalButton from "Containers/PortalButton/PortalButton";
import {
  totalSumBasketSelector,
  totalQuantityBasketSelector,
} from "Bus/Selectors/basketSelector";
import { EXCLUDE_BASKET_PASS, CURR_WORK_GOODS_ARR } from "Constants/constants";
import logo from "Assets/img/logo.png";
import "Components/Header/header.css";

const Header = () => {
  const { pathname } = useLocation();
  const quantity = useSelector(totalQuantityBasketSelector);
  const sum = useSelector(totalSumBasketSelector);
  const widgetBasetVisibility = pathname !== EXCLUDE_BASKET_PASS;

  return (
    <>
      <header className="header">
        <NavLink
          exact
          activeClassName="activeLogo"
          to={{ pathname: "/", state: { source: CURR_WORK_GOODS_ARR.ALL } }}>
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>

        <div className="widget-group">
          <NavLink
            activeClassName="active"
            to={{
              pathname: "/myGoods",
              state: { source: CURR_WORK_GOODS_ARR.MY },
            }}>
            <div className="my-products">My products</div>
          </NavLink>

          <PortalButton modalPayload={{ type: "form" }} />

          <Link to="/basket">
            <HeaderBasketWidget
              visibility={widgetBasetVisibility}
              sum={sum}
              quantity={quantity}
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
