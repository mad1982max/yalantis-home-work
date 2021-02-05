import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HeaderBasketWidget from "Components/HeaderBasketWidget/HeaderBasketWidget";
import NewProductPortal from "Components/NewProductPortal/NewProductPortal";
import CreationForm from "Components/CreationForm/CreationForm";
import {
  totalSumBasketSelector,
  totalQuantityBasketSelector,
} from "Bus/Selectors/basketSelector";
import { setVisibility } from "Bus/Slicers/pageSlicer";
import { EXCLUDE_BASKET_PASS } from "Constants/constants";
import { menuVisibility } from "Bus/Selectors/pageSelector";
import addNewIco from "Assets/img/ico/add.png";
import hideIco from "Assets/img/ico/hide.png";
import logo from "Assets/img/logo.png";
import "Components/Header/header.css";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const portalVisibility = useSelector(menuVisibility);
  const quantity = useSelector(totalQuantityBasketSelector);
  const sum = useSelector(totalSumBasketSelector);
  const widgetBasetVisibility = pathname !== EXCLUDE_BASKET_PASS;
  const showPortal = () => dispatch(setVisibility());

  return (
    <>
      <header className="header">
        <NavLink exact activeClassName="activeLogo" to="/">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>

        <div className="widget-group">
          <NavLink activeClassName="active" to="/myGoods">
            <div className="my-products">My products</div>
          </NavLink>

          <button onClick={showPortal} className="newProduct" type="button">
            <img src={portalVisibility ? hideIco : addNewIco} alt="addIco" />
          </button>

          {portalVisibility && (
            <NewProductPortal>
              <CreationForm />
            </NewProductPortal>
          )}

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
