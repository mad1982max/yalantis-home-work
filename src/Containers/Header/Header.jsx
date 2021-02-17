import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HeaderBasketWidget from "Components/HeaderBasketWidget/HeaderBasketWidget";
import CreationForm from "Components/ModalForm/ModalForm";
import Portal from "Components/Portal/ProductPortal";
import Button from "Components/Button/Button";
import {
  modalEditVisibility,
  modalCreateVisibility,
} from "Bus/Selectors/pageSelector";
import {
  setCreateModalVisibility,
  closeEditModalVisibility,
  closeCreateModalVisibility,
} from "Bus/Slicers/pageSlicer";
import {
  totalSumBasketSelector,
  totalQuantityBasketSelector,
} from "Bus/Selectors/basketSelector";
import { useUpdateProduct } from "Bus/Hooks/updateProductHook";
import {
  EXCLUDE_BASKET_PASS,
  CURR_WORK_GOODS_ARR,
  PORTAL_CREATE_ROOT,
} from "Constants/constants";
import addNewIco from "Assets/img/ico/add.png";
import hideIco from "Assets/img/ico/hide.png";
import logo from "Assets/img/logo.png";
import "Containers/Header/header.css";

const Header = () => {
  const { setConfirm } = useUpdateProduct();
  const dispatch = useDispatch();
  const modalVisibility = useSelector(modalCreateVisibility);
  const modalEditFormVisibility = useSelector(modalEditVisibility);
  const { pathname } = useLocation();
  const quantity = useSelector(totalQuantityBasketSelector);
  const sum = useSelector(totalSumBasketSelector);
  const widgetBasetVisibility = pathname !== EXCLUDE_BASKET_PASS;

  const showPortal = () => {
    dispatch(setCreateModalVisibility());
    if (modalEditFormVisibility) {
      dispatch(closeEditModalVisibility());
      setConfirm(true);
    }
  };

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
            <div className="my-products">CUSTOM</div>
          </NavLink>

          <Button
            onClick={showPortal}
            className="portalBtn new-product"
            image={modalVisibility ? hideIco : addNewIco}
            alt="addIco"
          />

          {modalVisibility && (
            <Portal type={PORTAL_CREATE_ROOT}>
              <CreationForm
                type={PORTAL_CREATE_ROOT}
                closeOnClick={closeOnClick}
              />
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
