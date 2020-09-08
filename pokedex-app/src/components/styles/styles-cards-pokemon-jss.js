const styles = (theme) => ({
  pokemonCard: {
    width: "100%",
    margin: "3% 0%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  card: {
    maxWidth: 300,
    minWidth: 300,
    width: "100%",
    "@media (max-width: 700px)": {
        maxWidth: 210,
        minWidth: 210,
    },
    "@media (max-width: 500px)": {
        maxWidth: 150,
        minWidth: 150,
    },
    "@media (max-width: 320px)": {
        maxWidth: 130,
        minWidth: 130,
    },
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
    "@media (max-width: 500px)": {
        height: 100,
    },
    "@media (max-width: 320px)": {
        height: 70,
    },
  },
});

export default styles;
