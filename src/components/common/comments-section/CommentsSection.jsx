import { Container, TextField } from "@material-ui/core";
import { useState } from "react";
import { useStyle } from "./Styles";

import { CommentsList } from "../comments-list/CommentsList";
import { useDispatch } from "react-redux";
import { createCommentAsync } from "../../../store/slices";

export const CommentsSection = ({ productId, comments }) => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const [commentText, setCommentText] = useState("");
  const [hasCommentError, setHasCommentError] = useState(false);

  const onCommentInput = (e) => {
    setCommentText(e.target.value);
  };

  const onCommentFocus = () => {
    setHasCommentError(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!commentText) {
      setHasCommentError(true);
      return;
    }

    dispatch(createCommentAsync({ productId, description: commentText }));
    setCommentText("");
  };

  return (
    <Container className={classes.sectionStyles}>
      <form
        className={classes.formStyles}
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          error={hasCommentError ? true : false}
          value={commentText}
          onChange={onCommentInput}
          onFocus={onCommentFocus}
          id="standard-error-helper-text"
          label={hasCommentError ? "Error" : "Enter your comment"}
          helperText={hasCommentError ? "Empty comment" : ""}
        />
      </form>
      {comments && <CommentsList comments={comments}></CommentsList>}
    </Container>
  );
};
