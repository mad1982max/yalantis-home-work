import { Switch, Route } from "react-router-dom";
import ListOfGoods from "../ListOfGoods/ListOfGoods";
import Error404 from "../Error404/Error404";
import ProductPage from "../ProductPage/ProductPage";
import "./main.css";
import Basket from "../Basket/Basket";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ListOfGoods} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/basket" component={Basket} />
      <Route path="*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
