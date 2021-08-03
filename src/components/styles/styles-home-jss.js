const styles = (theme) => ({
  containerLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    padding: 0,
    margin: 0,
  },
  imagePokeApi: {
    width: "100%",
    maxWidth: 450,
    minWidth: 450,
    "@media (max-width: 700px)": {
      maxWidth: 320,
      minWidth: 320,
    },
    "@media (max-width: 320px)": {
        maxWidth: 220,
        minWidth: 220,
      },
  },
  containerButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 15,
    maxWidth: 200,
  },
  buttonStart: {
    backgroundColor: '#ffc918',
    color: '#3760ab',
    width: '100%',
    '&:hover': {
        backgroundColor: '#3760ab',
        color: '#ffc918',
    },
  },
});

export default styles;
