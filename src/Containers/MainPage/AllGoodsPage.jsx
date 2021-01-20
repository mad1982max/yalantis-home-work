import { useContext } from "react";
import { fetchedDataCTX } from "Helpers_/goodsFromServer/context";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import Loader from "Components/Loader/Loader";
import "Containers/MainPage/allGoodsPage.css";

const AllGoodsPage = () => {
  const { allGoods, isLoading } = useContext(fetchedDataCTX);

  return (
    <>
      <div className="main-header-inList">List of goods:</div>
      {isLoading ? <Loader /> : <ListOfProducts goods={allGoods} />}
    </>
  );
};

export default AllGoodsPage;
