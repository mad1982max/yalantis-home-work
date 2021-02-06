import { useMyFetchedData } from "Bus/Hooks/myProductsHook";
import Loader from "Components/Loader/Loader";
import ListOfProducts from "Components/ListOfProducts/ListOfProducts";
import SearchRow from "Containers/Search/SearchRow";
import "Containers/MyGoods/myGoods.css";

const MyGoods = () => {
  const { allMyProductsAPI, areLoaded } = useMyFetchedData();

  return (
    <div className="main-wrapper">
      <SearchRow source="my" />
      {areLoaded ? <Loader /> : <ListOfProducts goods={allMyProductsAPI} />}
    </div>
  );
};

export default MyGoods;
