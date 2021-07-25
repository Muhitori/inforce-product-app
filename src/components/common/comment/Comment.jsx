import { Container, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deleteCommentAsync } from "../../../store/slices";
import { useStyle } from "./Styles";

export const Comment = ({ id, description, date }) => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const deleteComment = () => {
    dispatch(deleteCommentAsync(id));
  };

  return (
    <Container className={classes.root}>
      <Typography variant="body2" color="textPrimary" component="span">
        {description}
      </Typography>
      <Typography variant="body2" color="textPrimary" component="span">
        {date}
      </Typography>
      <DeleteIcon onClick={deleteComment} />
    </Container>
  );
};
