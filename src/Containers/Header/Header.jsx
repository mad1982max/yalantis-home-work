import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HeaderBasketWidget from "Components/HeaderBasketWidget/HeaderBasketWidget";
import CreationForm from "Components/ModalForm/ModalForm";
import Portal from "Components/Portal/ProductPortal";
import { modalCreateVisibility } from "Bus/Selectors/pageSelector";
import {
  setCreateModalVisibility,
  closeCreateModalVisibility,
} from "Bus/Slicers/pageSlicer";
import {
  totalSumBasketSelector,
  totalQuantityBasketSelector,
} from "Bus/Selectors/basketSelector";
import { EXCLUDE_BASKET_PASS, CURR_WORK_GOODS_ARR } from "Constants/constants";
import addNewIco from "Assets/img/ico/add.png";
import hideIco from "Assets/img/ico/hide.png";
import logo from "Assets/img/logo.png";
import "Containers/Header/header.css";

const Header = () => {
  const dispatch = useDispatch();
  const modalVisibility = useSelector(modalCreateVisibility);
  const { pathname } = useLocation();
  const quantity = useSelector(totalQuantityBasketSelector);
  const sum = useSelector(totalSumBasketSelector);
  const widgetBasetVisibility = pathname !== EXCLUDE_BASKET_PASS;

  const showPortal = () => dispatch(setCreateModalVisibility());

  const closeOnClick = () => dispatch(closeCreateModalVisibility());

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

          <button
            onClick={showPortal}
            className="portalBtn newProduct"
            type="button">
            <img src={modalVisibility ? hideIco : addNewIco} alt="addIco" />
          </button>

          {modalVisibility && (
            <Portal type="portal-create">
              <CreationForm type="portal-create" closeOnClick={closeOnClick} />
            </Portal>
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
