import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    background: "black",
    color: "white",
    fontSize: 10,
    opacity: 0.9,

    "& Copyright": {
      fontSize: 12,
    },
  },
});

export { useStyles };
