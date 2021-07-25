import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  productStyles: {
    display: "flex",
  },
  productDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
});
