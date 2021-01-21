import { useFetchedData } from "Bus/Hooks/allProductsServerHook";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import Loader from "Components/Loader/Loader";
import "Containers/MainPage/allGoodsPage.css";

const AllGoodsPage = () => {
  const { allProductsAPI, isLoading } = useFetchedData();

  return (
    <>
      <div className="main-header-inList">List of goods:</div>
      {isLoading ? <Loader /> : <ListOfProducts goods={allProductsAPI} />}
    </>
  );
};

export default AllGoodsPage;
