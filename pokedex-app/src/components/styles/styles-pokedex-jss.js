const styles = (theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  containerProgress: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerPagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }
});

export default styles;
