import { useFetchedData } from "Bus/Hooks/productsHook";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import Loader from "Components/Loader/Loader";
import SearchRow from "Containers/Search/SearchRow";
import "Containers/MainPage/allGoodsPage.css";

const AllGoodsPage = () => {
  const { allProductsAPI, areLoaded } = useFetchedData("all");

  return (
    <div className="main-wrapper">
      <SearchRow source="all" />
      {areLoaded ? <Loader /> : <ListOfProducts goods={allProductsAPI} />}
    </div>
  );
};

export default AllGoodsPage;
