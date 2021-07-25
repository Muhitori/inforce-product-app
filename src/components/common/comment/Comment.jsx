import { Container, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyle } from "./Styles";

export const Comment = ({ id, description, date }) => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Typography variant="body2" color="textPrimary" component="span">
        {description}
      </Typography>
      <Typography variant="body2" color="textPrimary" component="span">
        {date}
      </Typography>{" "}
      <DeleteIcon />
    </Container>
  );
};
