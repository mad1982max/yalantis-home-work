import { Switch, Route } from "react-router-dom";
import AllGoodsPage from "Containers/MainPage/AllGoodsPage";
import Error404 from "Components/Error404/Error404";
import SingleProductPage from "Containers/SingleProductPage/SingleProductPage";
import BasketPage from "Containers/BasketPage/BasketPage";
import MyGoods from "Containers/MyGoods/MyGoods";
import "Components/Main/main.css";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AllGoodsPage} />
      <Route path="/product/:id" component={SingleProductPage} />
      <Route path="/basket" component={BasketPage} />
      <Route path="/error" component={Error404} />
      <Route path="/myGoods" component={MyGoods} />
      <Route path="*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
