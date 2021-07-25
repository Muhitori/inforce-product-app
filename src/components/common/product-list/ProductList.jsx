import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import { useStyle } from "./Styles";

import { Product } from "../product/Product";

import { getAllProductsAsync } from "../../../store/slices";
import { productsListSelector } from "../../../store/selectors";

export const ProductList = () => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const products = useSelector(productsListSelector);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  const renderProducts = () =>
    products.map((product) => (
      <Grid key={product.id} item>
        <Product {...product} />
      </Grid>
    ));

  return (
    <Grid container justifyContent="center" spacing={5}>
      {renderProducts()}
    </Grid>
  );
};
