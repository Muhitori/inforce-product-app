import { Container } from "@material-ui/core";
import { useStyle } from "./Styles";

import { Comment } from "../comment/Comment";

export const CommentsList = ({ comments }) => {
  const classes = useStyle();

  const renderComments = () =>
    comments.map((comment) => <Comment key={comment.id} {...comment} />);

  return <Container className={classes.root}>{renderComments()}</Container>;
};
