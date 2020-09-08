import React, { useEffect, useState } from "react";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";

import PokemonCard from "../components/CardPokemons";
import styles from "../components/styles/styles-pokedex-jss";

const PokedexContainer = (props) => {
  const { classes } = props;
  const [pokemon, setPokemon] = React.useState();
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [number, setNumber] = React.useState(0);
  const arr = [];

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async (value) => {
    try {
      setLoading(true);
      const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${number}&limit=50`;
      const res = await axios.get(URL);
      const data = res.data.results;
      setResult(
        data.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
          setPokemon(arr);
          setNumber(50);
          console.log("array", arr);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonsPaginationNext = async (result) => {
    try {
      setLoading(true);
      let URL = `https://pokeapi.co/api/v2/pokemon/?offset=${result}&limit=50`;
      const res = await axios.get(URL);
      const data = res.data.results;
      const nextElements = res.data.next;
      console.log("nextElements:", nextElements);
      setResult(
        data.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
          setPokemon(arr);
          console.log("nuevo array", arr);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const handlePageChange = (event, value) => {
    console.log("value", value);
    if (value === 1) {
      value = 0;
    }
    const result = value * 50;
    setPage(value);
    console.log("result:::", result);
    setNumber(result);
    getPokemonsPaginationNext(result);
  };

  return (
    <Grid container spacing={12}>
      {loading ? (
        <div className={classes.containerProgress}>
          <CircularProgress />
        </div>
      ) : pokemon ? (
        pokemon.map((pokemonCard) => {
          return (
            <Grid
              item
              lg={3}
              md={4}
              sm={6}
              xs={6}
              id={pokemonCard.id}
              key={pokemonCard.id}
            >
              <PokemonCard
                idPokemon={pokemonCard.id}
                srcPokemon={pokemonCard.sprites.other.dream_world.front_default}
                namePokemon={pokemonCard.name}
                typePokemon={pokemonCard.types[0].type.name}
                weightPokemon={pokemonCard.weight}
                baseExperiencePokemon={pokemonCard.base_experience}
                heightPokemon={pokemonCard.height}
              />
            </Grid>
          );
        })
      ) : (
        <div className={classes.containerProgress}>
          <CircularProgress />
        </div>
      )}
      <div className={classes.containerPagination}>
        <Pagination
          count={12}
          boundaryCount={12}
          page={page}
          siblingCount={0}
          onChange={handlePageChange}
          size="large"
        />
      </div>
    </Grid>
  );
};

export default withStyles(styles)(PokedexContainer);
