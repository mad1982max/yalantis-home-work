import { Link, useLocation } from "react-router-dom";
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
  const burgerMenuvisibility = useSelector(menuVisibility);
  const quantity = useSelector(totalQuantityBasketSelector);
  const sum = useSelector(totalSumBasketSelector);
  const widgetBasetVisibility = pathname !== EXCLUDE_BASKET_PASS;
  const menuShow = () => dispatch(setVisibility());

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="widget-group">
          <Link to="/handMade">
            <div className="my-products">My products</div>
          </Link>
          <button onClick={menuShow} className="newProduct" type="button">
            <img
              src={burgerMenuvisibility ? hideIco : addNewIco}
              alt="addIco"
            />
          </button>
          {burgerMenuvisibility && (
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
