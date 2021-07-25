import {
  Container,
  CardMedia,
  Typography,
  Divider,
  Card,
} from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useStyle } from "./Styles";

import { CommentsSection } from "../../common/comments-section/CommentsSection";

import {
  commentsListSelector,
  currentProductSelector,
} from "../../../store/selectors";
import {
  getCommentsByProductIdAsync,
  getProductByIdAsync,
} from "../../../store/slices";

export const ProductDetailedView = () => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const { id } = useParams();
  const {
    imageUrl: src,
    name,
    count,
    size,
    weight,
  } = useSelector(currentProductSelector);
  const comments = useSelector(commentsListSelector);

  useEffect(() => {
    dispatch(getProductByIdAsync(id));
    dispatch(getCommentsByProductIdAsync(id));
  }, []);

  return (
    <Container>
      <Card className={classes.productStyles}>
        {src && <CardMedia className={classes.media} image={src}></CardMedia>}
        <Container className={classes.productDescription}>
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
  );
};
