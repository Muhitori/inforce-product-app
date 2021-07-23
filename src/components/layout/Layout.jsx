import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductList } from "../common/product-list/ProductList";
import { ProductDetailedView } from "../pages/product-detailed-view/ProductDetailedView";

export const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:id" component={ProductDetailedView} />
        <Route path="/" component={ProductList} />
      </Switch>
    </Router>
  );
};
