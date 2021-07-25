import { Container, TextField } from "@material-ui/core";
import { useState } from "react";
import { useStyle } from "./Styles";

import { CommentsList } from "../comments-list/CommentsList";

export const CommentsSection = ({ productId, comments }) => {
  const classes = useStyle();

  const [commentText, setCommentText] = useState("");
  const [commentError, setCommentError] = useState(false);

  const onCommentInput = (e) => {
    setCommentText(e.target.value);
  };

  const onCommentFocus = () => {
    setCommentError(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!commentText) {
      setCommentError(true);
    }
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
          error={commentError ? true : false}
          value={commentText}
          onChange={onCommentInput}
          onFocus={onCommentFocus}
          id="standard-error-helper-text"
          label={commentError ? "Error" : "Enter your comment"}
          helperText={commentError ? "Empty comment" : ""}
        />
      </form>
      {comments && <CommentsList comments={comments}></CommentsList>}
    </Container>
  );
};
