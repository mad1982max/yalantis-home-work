import { useHistory } from "react-router-dom";
import Loader from "Components/Loader/Loader";
import ExtendedProductCard from "Components/ExtendedProductCard/ExtendedProductCard";
import { useFetchedSingleData } from "Bus/Hooks/productHook";
import "Containers/SingleProductPage/singleProductPage.css";

const SingleProductPage = (props) => {
  const id = props.match.params.id;

  const { currentProduct, areLoaded } = useFetchedSingleData(id);
  const history = useHistory();
  const goTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <div className="product-header">Product:</div>
      <div className="product-page">
        {areLoaded ? (
          <Loader />
        ) : (
          <ExtendedProductCard product={currentProduct} />
        )}
      </div>

      <div className="basket-btn-group">
        <button type="button" onClick={() => goTo("/")} id="return">
          TO MAIN
        </button>
        <button type="button" onClick={() => goTo("/basket")} id="basket">
          TO BASKET
        </button>
      </div>
    </>
  );
};

export default SingleProductPage;
