import React, { useEffect, useState } from "react";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import PokemonEvolutions from "../components/PokemonEvolutions";
import styles from "../components/styles/styles-pokemon-evolutions-jss";

const PokemonEvolutionsContainer = (props) => {
  const { classes } = props;
  let url = window.location.href.split("/");
  const [loading, setLoading] = React.useState(false);
  const [pokemonEvolutionId, setPokemonEvolutionId] = React.useState(url[4]);
  const [dataPokemonEvolutions, setDataPokemonEvolutions] = React.useState([]);
  const evoChain = [];

  useEffect(() => {
    getPokemonEvolutions();
  }, []);

  const getPokemonEvolutions = async () => {
    try {
      setLoading(true);
      let URL = `https://pokeapi.co/api/v2/evolution-chain/${pokemonEvolutionId}/`;
      const res = await axios.get(URL);
      let evoData = res.data.chain;
      console.log("Data pokemon evoluciones:", evoData);

      let evoDetails = evoData["evolution_details"][0];
      let evolvesTo = evoData["evolves_to"];

      evoChain.push({
        species_name: evoData.species.name,
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
      });

      evoData = evoData["evolves_to"][0];
      console.log("evolvesTo:", evolvesTo);

      setDataPokemonEvolutions(evoChain);
      console.log("evoChain::", evoChain);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("pokemon evolutions::", dataPokemonEvolutions);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <Grid container spacing={12}>
      {loading ? (
        <div className={classes.containerProgress}>
          <CircularProgress />
        </div>
      ) : (
        <PokemonEvolutions
          infoPokemon={dataPokemonEvolutions}
        />
      )}
    </Grid>
  );
};

export default withStyles(styles)(PokemonEvolutionsContainer);
