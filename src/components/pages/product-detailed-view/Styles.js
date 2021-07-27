import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  productStyles: {
    display: "flex",
  },
  productDescription: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
  editIcon: {
    position: "absolute",
    top: "2%",
    right: "2%",
    border: "1px solid black",
    borderRadius: "10%",
  },
});
