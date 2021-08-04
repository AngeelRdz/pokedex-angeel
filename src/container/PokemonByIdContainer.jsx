import React, { useEffect, useState } from "react";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import PokemonCharacters from "../components/PokemonCharacters";
import styles from "../components/styles/styles-pokemon-by-id-jss";

const PokemonByIdContainer = (props) => {
  const { classes } = props;
  let url = window.location.href.split("/");
  const [loading, setLoading] = React.useState(false);
  const [pokemonById, setPokemonById] = React.useState(url[4]);
  const [imagePokemon, setImagePokemon] = React.useState();
  const [movesPokemon, setMovesPokemon] = React.useState();
  const [habilitiesPokemon, setHabilitiesPokemon] = React.useState();
  const [typesPokemon, setTypesPokemon] = React.useState();
  const [dataPokemonById, setDataPokemonById] = React.useState([]);

  useEffect(() => {
    getPokemonById();
  }, []);

  const getPokemonById = async () => {
    try {
      setLoading(true);
      let URL = `https://pokeapi.co/api/v2/pokemon/${pokemonById}`;
      const res = await axios.get(URL);
      const data = res.data;
      console.log("Elements pokemon ID:", data);
      setDataPokemonById(data);
      const movesPokemonById = data.moves;
    //   console.log("Moves::", movesPokemonById);
      const habilitiesPokemonById = data.abilities;
    //   console.log("Abilities::", habilitiesPokemonById);
      const typesPokemonById = data.types;
    //   console.log("Types::", typesPokemonById);
      const imagePokemonById = data.sprites.other.dream_world.front_default;
    //   console.log("imagePokemon::", imagePokemonById);
      setImagePokemon(imagePokemonById);
      setMovesPokemon(movesPokemonById);
      setHabilitiesPokemon(habilitiesPokemonById);
      setTypesPokemon(typesPokemonById);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("pokemonById::", dataPokemonById);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <Grid container spacing={12} className={classes.containerData}>
      {loading ? (
        <div className={classes.containerProgress}>
          <CircularProgress />
        </div>
      ) : (
        <PokemonCharacters
          idPokemon={dataPokemonById.id}
          namePokemon={dataPokemonById.name}
          typePokemon={typesPokemon}
          weightPokemon={dataPokemonById.weight}
          baseExperiencePokemon={dataPokemonById.base_experience}
          heightPokemon={dataPokemonById.height}
          srcPokemon={imagePokemon}
          movesPokemon={movesPokemon}
          habilitiesPokemon={habilitiesPokemon}
        />
      )}
    </Grid>
  );
};

export default withStyles(styles)(PokemonByIdContainer);
