import React, { useEffect, useState } from "react";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import { toFirstCharUppercase } from "../constants/constants";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CircularProgress,
  TextField,
  Button,
} from "@material-ui/core";
import styles from "../components/styles/styles-pokedex-jss";

const PokedexContainer = (props) => {
  const { classes } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDataExtend, setPokemonDataExtend] = useState({});
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [offset, setOffset] = React.useState("0");
  const arr = [];

  useEffect(() => {
    getPokemons();
    return () => {
      console.log("destruido");
    };
  }, [offset]);

  const getPokemons = () => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        let newPokemonDataExtend = {};
        // console.log("pokemon::::", data);
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
          };
        });

        results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon))
            .then((data) => {
              if (data) {
                arr.forEach((pokemonExtend, index) => {
                  newPokemonDataExtend[index + 1] = {
                    id: index + 1,
                    name: pokemonExtend.name,
                    types: pokemonExtend.types,
                    sprite: pokemonExtend.sprites.other.dream_world.front_default,
                  };
                });
              }
            });
        });

        setPokemonData(newPokemonData);
        setPokemonDataExtend(newPokemonDataExtend);

        console.log("data", newPokemonData, newPokemonDataExtend, arr);
      });
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const handleMoreClick = () => {
    console.log("me diste click");
    setOffset((offset + 20));
  };

  const getPokemonCard = (pokemonId) => {
    const { id } = pokemonData[pokemonId];
    const { name, types, sprite } = pokemonDataExtend[pokemonId];

    return (
      <Grid item lg={3} md={4} sm={6} xs={6} key={pokemonId}>
        <div className={classes.pokemonCard}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={sprite}
              title="Pokemon"
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.namePokemonId}>
                {`${id}. ${toFirstCharUppercase(name)}`}
              </Typography>
              <Typography className={classes.textTypesPokemons}>
                Tipo:
                {types.map((type) => {
                  return (
                    <span className={classes.spanTypesPokemons}>
                      {type.type.name}
                    </span>
                  );
                })}
              </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.containerButton}>
              <Button
                className={classes.buttonShowPokemon}
                component={Link}
                to={`/pokemon/${id}`}
              >
                Ver
              </Button>
            </CardActions>
          </Card>
        </div>
      </Grid>
    );
  };

  return (
    <div className={classes.containerCard}>
      <div className={classes.searchContainer}>
        <SearchIcon className={classes.searchIcon} />
        <TextField
          className={classes.searchInput}
          onChange={handleSearchChange}
          label="¡Busca a tu Pokémon!"
          variant="standard"
        />
      </div>
      {loading ? (
        <div className={classes.containerProgress}>
          <CircularProgress />
        </div>
      ) : pokemonDataExtend ? (
        <Grid container spacing={12}>
          {Object.keys(pokemonDataExtend).map(
            (pokemonId) =>
            pokemonDataExtend[pokemonId].name.includes(filter) &&
              pokemonDataExtend[pokemonId] &&
              getPokemonCard(pokemonId)
          )}
          <div className={classes.containerButtonShowMorePokemon}>
            <Button
              className={classes.buttonShowMorePokemon}
              type="button"
              onClick={handleMoreClick}
            >
              Ver más
            </Button>
          </div>
        </Grid>
      ) : (
        <div className={classes.containerProgress}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(PokedexContainer);
