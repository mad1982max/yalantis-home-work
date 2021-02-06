import { useFetchedData } from "Bus/Hooks/productsHook";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import Loader from "Components/Loader/Loader";
import SearchRow from "Containers/Search/SearchRow";
import { CURR_WORK_GOODS_ARR } from "Constants/constants";
import "Containers/MainPage/goodsPage.css";

const AllGoodsPage = (props) => {
  const source = props.location.state?.source || CURR_WORK_GOODS_ARR.ALL;
  const { allProductsAPI, allMyProductsAPI, areLoaded } = useFetchedData(
    source
  );
  const currentGoodsArr =
    source === CURR_WORK_GOODS_ARR.MY ? allMyProductsAPI : allProductsAPI;

  return (
    <div className="main-wrapper">
      <SearchRow source={source} />
      {areLoaded ? (
        <Loader />
      ) : (
        <ListOfProducts
          source={source}
          goods={currentGoodsArr}
          linkEnable={source === CURR_WORK_GOODS_ARR.ALL}
        />
      )}
    </div>
  );
};

export default AllGoodsPage;
