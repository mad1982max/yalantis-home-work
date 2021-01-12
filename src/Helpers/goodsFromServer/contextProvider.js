import fetchedDataCTX from "Helpers/goodsFromServer/context";
import useFetchedData from "Helpers/goodsFromServer/customHook";

const GoodsFromServerProvider = ({ children }) => {
  const { allGoods, setAllGoods, isLoading } = useFetchedData();
  return (
    <fetchedDataCTX.Provider value={{ allGoods, setAllGoods, isLoading }}>
      {children}
    </fetchedDataCTX.Provider>
  );
};

export default GoodsFromServerProvider;
