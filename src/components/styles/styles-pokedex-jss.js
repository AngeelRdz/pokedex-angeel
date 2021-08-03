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
    "&>div": {
      color: "#dc3545",
    },
  },
  containerPagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
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
    backgroundColor: "#020202",
    color: "#dc3545",
    border: "1px solid #ffc918",
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
    backgroundSize: "contain",
    "@media (max-width: 500px)": {
      height: 100,
    },
    "@media (max-width: 320px)": {
      height: 70,
    },
  },
  containerCard: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  searchContainer: {
    width: "100%",
    maxWidth: 320,
    minWidth: 320,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "2% 0% 5% 0%",
    color: "#dc3545",
  },
  searchIcon: {
    marginRight: "5%",
  },
  searchInput: {
    width: "100%",
    "&>label": {
      color: "#dc3545!important",
    },
    "&>div>input": {
      color: "#ffc918",
    },
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonShowPokemon: {
    backgroundColor: "#ffc918",
    color: "#3760ab",
    width: "100%",
    maxWidth: 120,
    "&:hover": {
      backgroundColor: "#3760ab",
      color: "#ffc918",
    },
  },
  namePokemonId: {
    textOverflow: "ellipsis",
    fontSize: 20,
    overflow: "hidden",
    whiteSpace: "nowrap",
    "@media (max-width: 700px)": {
      fontSize: 16,
    },
    "@media (max-width: 320px)": {
      fontSize: 14,
    },
  },
  textTypesPokemons: {
    color: '#3760ab',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spanTypesPokemons: {
    color: '#ffffff',
    margin: '0px 5px auto',
    fontWeight: 300,
  },
  containerButtonShowMorePokemon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    margin: '5% 0 5% 0',
  },
  buttonShowMorePokemon: {
    backgroundColor: "#3760ab",
    color: "#ffc918",
    width: "100%",
    maxWidth: 120,
    "&:hover": {
      backgroundColor: "#ffc918",
      color: "#3760ab",
    },
  }
});

export default styles;
