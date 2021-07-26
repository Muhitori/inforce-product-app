import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsPage } from "../pages/products-page/ProductsPage";
import { ProductDetailedView } from "../pages/product-detailed-view/ProductDetailedView";

export const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:id" component={ProductDetailedView} />
        <Route path="/" component={ProductsPage} />
      </Switch>
    </Router>
  );
};
