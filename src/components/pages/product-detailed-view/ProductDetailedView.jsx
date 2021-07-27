/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  CardMedia,
  Typography,
  Divider,
  Card,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { useStyle } from "./Styles";

import { CommentsSection } from "../../common/comments-section/CommentsSection";
import { ProductModal } from "../../common/product-modal/ProductModal";

import {
  commentsListSelector,
  currentProductSelector,
} from "../../../store/selectors";
import {
  getCommentsByProductIdAsync,
  getProductByIdAsync,
  updateProductAsync,
} from "../../../store/slices";

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

export const ProductDetailedView = () => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [editProduct, setEditProduct] = useState(defaultProduct);

  const { id } = useParams();
  const { imageUrl, name, count, size, weight } = useSelector(
    currentProductSelector
  );
  const comments = useSelector(commentsListSelector);

  useEffect(async () => {
    const { payload } = await dispatch(getProductByIdAsync(id));
    setEditProduct({
      ...payload,
      weight: parseInt(payload.weight),
    });
    dispatch(getCommentsByProductIdAsync(id));
  }, []);

  const openProductModal = () => {
    setIsOpenProductModal(true);
  };

  const closeProductModal = () => {
    setIsOpenProductModal(false);
  };

  const updateProduct = (product) => {
    dispatch(updateProductAsync({ id, product }));
    setEditProduct({ ...product, weight: parseInt(product.weight) });
    setIsOpenProductModal(false);
  };

  return (
    <>
      <Container>
        <Card className={classes.productStyles}>
          {imageUrl && (
            <CardMedia className={classes.media} image={imageUrl}></CardMedia>
          )}
          <Container className={classes.productDescription}>
            <EditIcon className={classes.editIcon} onClick={openProductModal} />
            <Container>
              <Typography variant="h3" color="textPrimary" component="h1">
                {name}
              </Typography>
              <Typography variant="h5" color="textSecondary" component="h5">
                {"count: " + count}
              </Typography>
              <Divider></Divider>
            </Container>

            <Container>
              <Typography variant="h4" color="textSecondary" component="p">
                {"width: " + size?.width}
              </Typography>
              <Typography variant="h4" color="textSecondary" component="p">
                {"height: " + size?.height}
              </Typography>
              <Typography variant="h4" color="textSecondary" component="p">
                {"weight: " + weight}
              </Typography>
            </Container>
          </Container>
        </Card>
        <CommentsSection productId={id} comments={comments}></CommentsSection>
      </Container>
      <ProductModal
        open={isOpenProductModal}
        onClose={closeProductModal}
        mode={"Edit"}
        onConfirm={updateProduct}
        product={editProduct}
      />
    </>
  );
};
