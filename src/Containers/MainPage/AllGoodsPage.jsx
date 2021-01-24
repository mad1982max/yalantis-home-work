import { useFetchedData } from "Bus/Hooks/productsHook";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import Loader from "Components/Loader/Loader";
import SearchRow from "Components/Search/SearchRow";
import "Containers/MainPage/allGoodsPage.css";

const AllGoodsPage = () => {
  const { allProductsAPI, isLoading } = useFetchedData();

  return (
    <>
      <div className="main-wrapper">
        <SearchRow />
        {isLoading ? <Loader /> : <ListOfProducts goods={allProductsAPI} />}
      </div>
    </>
  );
};

export default AllGoodsPage;
