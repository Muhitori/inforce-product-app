import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  centered: {
    textAlign: "center",
  },
});
