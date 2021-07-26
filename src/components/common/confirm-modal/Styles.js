import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 400,
    backgroundColor: "white",
    textAlign: "center",
    padding: theme.spacing(2),
    transform: "translate(-50%, -50%)",
  },
  title: {
    display: "block",
  },
  button: {
    margin: "2%",
  },
}));
