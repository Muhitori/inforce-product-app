import { useParams } from "react-router-dom";
import { useStyle } from "./Styles";

export const ProductDetailedView = () => {
  const { id } = useParams();
  const classes = useStyle();

  return <div>Product {id}</div>;
};
