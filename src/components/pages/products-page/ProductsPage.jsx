import { Button, Container } from "@material-ui/core";
import { useStyle } from "./Styles";
import { ProductList } from "../../common/product-list/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllProductsAsync } from "../../../store/slices";
import { productsListSelector } from "../../../store/selectors";
import { useState } from "react";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [sortByNameOptions, setSortByNameOptions] = useState({
    field: "name",
    sortOption: "asc",
  });
  const [sortByCountOptions, setSortByCountOptions] = useState({
    field: "count",
    sortOption: "asc",
  });

  const products = useSelector(productsListSelector);

  useEffect(() => {
    dispatch(getAllProductsAsync(sortByNameOptions));
    setSortByNameOptions({
      ...sortByNameOptions,
      sortOption: getSortOption(sortByNameOptions.sortOption),
    });
  }, []);

  const getSortOption = (sortOption) => (sortOption === "asc" ? "desc" : "asc");

  const sortByName = () => {
    dispatch(getAllProductsAsync(sortByNameOptions));
    setSortByNameOptions({
      ...sortByNameOptions,
      sortOption: getSortOption(sortByNameOptions.sortOption),
    });
  };

  const sortByCount = () => {
    dispatch(getAllProductsAsync(sortByCountOptions));
    setSortByCountOptions({
      ...sortByCountOptions,
      sortOption: getSortOption(sortByCountOptions.sortOption),
    });
  };

  return (
    <Container>
      <Container className={classes.header}>
        <Button className={classes.button} variant="contained" color="primary">
          Add new Product
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={sortByName}
        >
          Sort by name
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={sortByCount}
        >
          Sort by count
        </Button>
      </Container>
      <ProductList products={products}></ProductList>
    </Container>
  );
};
