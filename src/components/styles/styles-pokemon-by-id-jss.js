const styles = (theme) => ({
  containerProgress: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    "&>div": {
      color: "#dc3545",
    },
  },
  containerData: {
    justifyContent: "center",
    padding: 10,
  },
  pokemonCharactersContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerNamePokemon: {
    padding: 5,
    margin: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#3760ab",
  },
  containerDataPokemon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    order: 1,
    margin: 15,
    "@media (max-width: 700px)": {
      flexDirection: "column",
    },
  },
  containerImage: {
    display: "flex",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 700px)": {
      width: "100%",
      marginBottom: "5%",
    },
  },
  containerText: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    width: "40%",
    order: 2,
    "@media (max-width: 700px)": {
      width: "100%",
    },
  },
  containerImagePokemon: {
    width: 320,
    height: 320,
    "@media (max-width: 700px)": {
      width: 250,
      height: 250,
    },
    "@media (max-width: 320px)": {
      width: 200,
      height: 200,
    },
  },
  containerTabs: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "transparent",
    border: "1px solid #ffc918",
  },
  tabContainerText: {
    color: "#ffc918",
  },
  containerTabPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffc918",
    color: "#3760ab",
  },
  textTabs: {
    fontSize: "1rem",
    "@media (max-width: 700px)": {
      fontSize: 12,
    },
  },
  paperCharactersContainer: {
    width: "100%",
    minWidth: 580,
    maxWidth: 580,
    backgroundColor: "#020202",
    color: "#dc3545",
    border: "1px solid #ffc918",
    "@media (max-width: 700px)": {
      minWidth: "initial",
      maxWidth: "initial",
    },
  },
});

export default styles;
