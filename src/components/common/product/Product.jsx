import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyle } from "./Styles";

export const Product = ({ id, src, name, count, size, weight }) => {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.centered}
        title={<Link to={`/${id}`}>{name}</Link>}
        subheader={"available: " + count}
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
  );
};
