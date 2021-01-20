import { fetchedDataCTX } from "Helpers_/goodsFromServer/context";
import { useFetchedData } from "Helpers_/goodsFromServer/customHook";

const GoodsFromServerProvider = ({ children }) => {
  const { allGoods, setAllGoods, isLoading } = useFetchedData();
  return (
    <fetchedDataCTX.Provider value={{ allGoods, setAllGoods, isLoading }}>
      {children}
    </fetchedDataCTX.Provider>
  );
};

export default GoodsFromServerProvider;
