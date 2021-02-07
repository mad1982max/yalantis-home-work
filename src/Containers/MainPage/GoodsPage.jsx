import { useSelector, useDispatch } from "react-redux";
import { useFetchedData } from "Bus/Hooks/productsHook";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import Loader from "Components/Loader/Loader";
import CreationForm from "Components/ModalForm/ModalForm";
import { singleProductToEdit } from "Bus/Selectors/productSelector";
import { setProductToEdit } from "Bus/Slicers/productSlicer";
import {
  modalEditVisibility,
  modalCreateVisibility,
} from "Bus/Selectors/pageSelector";
import Portal from "Components/Portal/ProductPortal";
import SearchRow from "Containers/Search/SearchRow";
import {
  setEditModalVisibility,
  closeEditModalVisibility,
  closeCreateModalVisibility,
} from "Bus/Slicers/pageSlicer";
import { CURR_WORK_GOODS_ARR, PORTAL_EDIT_ROOT } from "Constants/constants";
import "Containers/MainPage/goodsPage.css";

const AllGoodsPage = (props) => {
  const source = props.location.state?.source || CURR_WORK_GOODS_ARR.ALL;
  const { currentGoodsArr, areLoaded } = useFetchedData(source);
  const modalVisibility = useSelector(modalEditVisibility);
  const modalCreatFormVisibility = useSelector(modalCreateVisibility);
  const { name, price, id, origin } = useSelector(singleProductToEdit);

  const dispatch = useDispatch();

  const showPortal = (e, product) => {
    dispatch(setProductToEdit(product));
    dispatch(setEditModalVisibility());
    if (modalCreatFormVisibility) {
      dispatch(closeCreateModalVisibility());
    }
  };

  const closeOnClick = () => {
    dispatch(closeEditModalVisibility());
  };

  return (
    <div className="main-wrapper">
      <SearchRow source={source} />
      {areLoaded ? (
        <Loader />
      ) : (
        <ListOfProducts
          goods={currentGoodsArr}
          linkEnable={source === CURR_WORK_GOODS_ARR.ALL}
          handleClick={showPortal}
        />
      )}

      {modalVisibility && (
        <Portal type={PORTAL_EDIT_ROOT}>
          <CreationForm
            name={name}
            price={price}
            id={id}
            origin={origin}
            type={PORTAL_EDIT_ROOT}
            closeOnClick={closeOnClick}
          />
        </Portal>
      )}
    </div>
  );
};

export default AllGoodsPage;
