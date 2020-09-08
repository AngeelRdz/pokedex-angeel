import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import styles from "./styles/styles-cards-pokemon-jss";

const PokemonsCard = (props) => {
  const { classes } = props;

  return (
    <div className={classes.pokemonCard}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.srcPokemon}
          title="Pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.namePokemon}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tipo: {props.typePokemon}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Altura: {props.heightPokemon} cms
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Peso: {props.weightPokemon} kg
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Experiencia Base: {props.baseExperiencePokemon}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`/pokemon/${props.idPokemon}`}
          >
            Ver
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(PokemonsCard);
