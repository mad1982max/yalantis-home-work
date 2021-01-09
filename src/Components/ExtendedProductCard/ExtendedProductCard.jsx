import ProductCard from "Components/ProductCard/ProductCard";
import "Components/ExtendedProductCard/extendedProductCard.css";

const extendedProductCardFn = (Card) => {
  const extComp = (props) => {
    const defineDate = (date) =>
      new Intl.DateTimeFormat("ru-RU").format(new Date(date));

    return (
      <>
        <Card {...props} />
        <div className="additional-info">
          <div className="idWrapper-group">
            <div className="bold">ID:</div>
            <div className="id-value">{props.product.id}</div>
          </div>

          <div className="date-wrapper">
            <div className="dateWrapper-group">
              <div className="bold">CREATED:</div>
              <div className="created">
                {defineDate(props.product.createdAt)}
              </div>
            </div>

            <div className="dateWrapper-group">
              <div className="bold">LAST UPDATE:</div>
              <div className="updated">
                {defineDate(props.product.updatedAt)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return extComp;
};

const ExtendedProductCard = extendedProductCardFn(ProductCard);

export default ExtendedProductCard;
