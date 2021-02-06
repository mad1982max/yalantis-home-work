import Loader from "Components/Loader/Loader";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import SearchRow from "Containers/Search/SearchRow";
import { useFetchedData } from "Bus/Hooks/productsHook";
import "Containers/MyGoods/myGoods.css";

const MyGoods = () => {
  const { allMyProductsAPI, areLoaded } = useFetchedData("my");

  return (
    <div className="main-wrapper">
      <SearchRow source="my" />
      {areLoaded ? <Loader /> : <ListOfProducts goods={allMyProductsAPI} />}
    </div>
  );
};

export default MyGoods;
