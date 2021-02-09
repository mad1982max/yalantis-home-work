import { useHistory } from "react-router-dom";
import Loader from "Components/Loader/Loader";
import ExtendedProductCard from "Components/ExtendedProductCard/ExtendedProductCard";
import Button from "Components/Button/Button";
import { useFetchedSingleData } from "Bus/Hooks/singleProductHook";
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
        <Button onClick={() => goTo("/")} title="TO MAIN" />

        <Button onClick={() => goTo("/basket")} title="TO BASKET" />
      </div>
    </>
  );
};

export default SingleProductPage;
