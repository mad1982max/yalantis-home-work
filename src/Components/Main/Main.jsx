import { Switch, Route } from "react-router-dom";
import AllGoodsPage from "Components/MainPage/AllGoodsPage";
import Error404 from "Components/Error404/Error404";
import ProductPage from "Components/ProductPage/ProductPage";
import BasketPage from "Components/BasketPage/BasketPage";
import "Components/Main/main.css";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AllGoodsPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/basket" component={BasketPage} />
      <Route path="/error" component={Error404} />
      <Route path="*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
