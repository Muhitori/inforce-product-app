import { useStyle } from "./Styles";
import { Button, Modal } from "@material-ui/core";

export const ConfirmModal = ({ open, onClose, productTitle, onConfirm }) => {
  const classes = useStyle();
  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.modal}>
        <h2 className={classes.title}>Delete {productTitle}?</h2>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={onConfirm}
        >
          Yes
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={onClose}
        >
          No
        </Button>
      </div>
    </Modal>
  );
};
