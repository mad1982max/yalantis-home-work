import { Switch, Route } from "react-router-dom";
import AllGoodsPage from "../AllGoodsPage/AllGoodsPage";
import Error404 from "../Error404/Error404";
import ProductPage from "../ProductPage/ProductPage";
import "./main.css";
import BasketPage from "../BasketPage/BasketPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AllGoodsPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/basket" component={BasketPage} />
      <Route path="*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
