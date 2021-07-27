import { Button, Container } from "@material-ui/core";
import { useState } from "react";
import { useStyle } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { createProductAsync, getAllProductsAsync } from "../../../store/slices";
import { productsListSelector } from "../../../store/selectors";

import { ProductModal } from "../../common/product-modal/ProductModal";
import { ProductList } from "../../common/product-list/ProductList";

const defaultProduct = {
  imageUrl: "",
  name: "",
  count: 0,
  size: {
    width: 0,
    height: 0,
  },
  weight: 0,
};

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState(defaultProduct);

  const [sortByNameOptions, setSortByNameOptions] = useState({
    field: "name",
    sortOption: "asc",
  });
  const [sortByCountOptions, setSortByCountOptions] = useState({
    field: "count",
    sortOption: "asc",
  });

  const products = useSelector(productsListSelector);

  const getSortOption = (sortOption) => (sortOption === "asc" ? "desc" : "asc");

  const updateSortOption = (sortOptions, setSortOptions) => {
    setSortOptions({
      ...sortOptions,
      sortOption: getSortOption(sortOptions.sortOption),
    });
  };

  useEffect(() => {
    dispatch(getAllProductsAsync(sortByNameOptions));
    updateSortOption(sortByNameOptions, setSortByNameOptions);
  }, []);

  const sortByName = () => {
    dispatch(getAllProductsAsync(sortByNameOptions));
    updateSortOption(sortByNameOptions, setSortByNameOptions);
  };

  const sortByCount = () => {
    dispatch(getAllProductsAsync(sortByCountOptions));
    updateSortOption(sortByCountOptions, setSortByCountOptions);
  };

  const openProductModal = () => {
    setIsOpenProductModal(true);
  };

  const closeProductModal = () => {
    setIsOpenProductModal(false);
  };

  const addProduct = (product) => {
    dispatch(createProductAsync(product));
    setNewProduct(defaultProduct);
    setIsOpenProductModal(false);
  };

  return (
    <>
      <Container>
        <Container className={classes.header}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={openProductModal}
          >
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
      <ProductModal
        open={isOpenProductModal}
        onClose={closeProductModal}
        mode={"Add"}
        onConfirm={addProduct}
        product={newProduct}
      />
    </>
  );
};
