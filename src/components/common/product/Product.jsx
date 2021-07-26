import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductAsync } from "../../../store/slices";
import { ConfirmModal } from "../confirm-modal/ConfirmModal";
import { useStyle } from "./Styles";

export const Product = ({ id, src, name, count, size, weight }) => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const openConfirmModal = () => {
    setIsOpenConfirmModal(true);
  };

  const closeConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  const deleteProduct = () => {
    dispatch(deleteProductAsync(id));
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          className={classes.centered}
          title={<Link to={`/${id}`}>{name}</Link>}
          subheader={"available: " + count}
          action={<CloseIcon onClick={openConfirmModal} />}
        />
        <CardMedia className={classes.media} image={src} />
        <CardContent>
          <Typography
            className={classes.centered}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {"width: " + size.width}
          </Typography>
          <Typography
            className={classes.centered}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {"height: " + size.height}
          </Typography>
          <Typography
            className={classes.centered}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {"weight: " + weight}
          </Typography>
        </CardContent>
      </Card>
      <ConfirmModal
        open={isOpenConfirmModal}
        onClose={closeConfirmModal}
        productTitle={name}
        onConfirm={deleteProduct}
      />
    </>
  );
};
