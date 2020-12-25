import { Switch, Route } from "react-router-dom";
import ListOgGoods from "../ListOfGoods/ListOfGoods";
import Error404 from "../Error404/Error404";
import Product from "../Product/Product";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ListOgGoods} />
      <Route path="/product" component={Product} />
      <Route path="*" component={Error404} />
    </Switch>
  </main>
);

export default Main;
