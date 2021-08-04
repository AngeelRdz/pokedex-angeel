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
  const evoChain2 = [];
  const evoChain3 = [];

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
      // console.log('evoDetails:::', evoDetails);
      let evolvesTwoEvolution = evoData["evolves_to"][0] !== undefined ? evoData["evolves_to"][0] : '';
      console.log('evolvesTwoEvolution:::', evolvesTwoEvolution);
      let evolvesThreeEvolution = evolvesTwoEvolution !== '' ? evolvesTwoEvolution["evolves_to"][0] : '';
      console.log('evolvesThreeEvolution:::', evolvesThreeEvolution);

      evoChain.push({
        species_name: evoData.species.name,
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item
      });

      evoChain2.push({
        species_name: !evolvesTwoEvolution ? null : evolvesTwoEvolution.species.name,
        min_level: evolvesTwoEvolution.evolution_details === undefined ? 1 : evolvesTwoEvolution.evolution_details[0].min_level,
        trigger_name: evolvesTwoEvolution.evolution_details === undefined ? null : evolvesTwoEvolution.evolution_details[0].trigger.name,
        item: evolvesTwoEvolution.evolution_details === undefined ? null : evolvesTwoEvolution.evolution_details[0].item
      });

      evoChain3.push({
        species_name: !evolvesThreeEvolution ? null : evolvesThreeEvolution.species.name,
        min_level: evolvesThreeEvolution === undefined ? 1 : evolvesThreeEvolution.evolution_details === undefined ? 1 : evolvesThreeEvolution.evolution_details[0].min_level,
        trigger_name: evolvesThreeEvolution === undefined ? '' : evolvesThreeEvolution.evolution_details === undefined ? null : evolvesThreeEvolution.evolution_details[0].trigger.name,
        item: evolvesThreeEvolution === undefined ? '' : evolvesThreeEvolution.evolution_details === undefined ? null : evolvesThreeEvolution.evolution_details[0].item
      });

      const concatEvoChain = evoChain.concat(evoChain2, evoChain3);

      evoData = evoData["evolves_to"][0];
      console.log("evolvesTo:", evolvesTwoEvolution);

      setDataPokemonEvolutions(concatEvoChain);
      console.log("evoChain::", concatEvoChain);
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
