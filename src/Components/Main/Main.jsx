import { Switch, Route } from "react-router-dom";
import ListOfGoods from "../ListOfGoods/ListOfGoods";
import Error404 from "../Error404/Error404";
import Product from "../Product/Product";
import "./main.css";
import Basket from "../Basket/Basket";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ListOfGoods} />
      <Route path="/product/:id" component={Product} />
      <Route path="/basket" component={Basket} />
      <Route path="*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
