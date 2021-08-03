import React from "react";
import { withStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import styles from "./styles/styles-pokemon-by-id-jss";


const PokemonEvolutions = (props) => {
  const { classes } = props;
  console.log('ppp', props.infoPokemon);

  return (
    <div className={classes.pokemonEvolutionsContainer}>
      <Typography gutterBottom variant="h5" component="h5">
        {props.infoPokemon ? (
          props.infoPokemon.map((info) => {
            return (
              <Typography variant="h6" component="h6">
                {info.species_name}
              </Typography>
            );
          })
        ) : (
          <div className={classes.containerProgress}>
            <CircularProgress />
          </div>
        )}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(PokemonEvolutions);
