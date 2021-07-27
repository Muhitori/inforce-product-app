import { Grid } from "@material-ui/core";
import { Product } from "../product/Product";

export const ProductList = ({ products }) => {
  const renderProducts = () =>
    products.map((product) => (
      <Grid key={product.id} xs={4} item>
        <Product {...product} />
      </Grid>
    ));

  return (
    <Grid container justifyContent="center" spacing={5}>
      {renderProducts()}
    </Grid>
  );
};
