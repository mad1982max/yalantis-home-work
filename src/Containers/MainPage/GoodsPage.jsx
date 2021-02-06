import { useFetchedData } from "Bus/Hooks/productsHook";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import Loader from "Components/Loader/Loader";
import SearchRow from "Containers/Search/SearchRow";
import { CURR_WORK_GOODS_ARR } from "Constants/constants";
import "Containers/MainPage/goodsPage.css";

const AllGoodsPage = (props) => {
  const source = props.location.state?.source || CURR_WORK_GOODS_ARR.ALL;
  const { currentGoodsArr, areLoaded } = useFetchedData(source);

  return (
    <div className="main-wrapper">
      <SearchRow source={source} />
      {areLoaded ? (
        <Loader />
      ) : (
        <ListOfProducts
          goods={currentGoodsArr}
          linkEnable={source === CURR_WORK_GOODS_ARR.ALL}
        />
      )}
    </div>
  );
};

export default AllGoodsPage;
