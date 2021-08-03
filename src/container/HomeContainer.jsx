import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LogoPokeAPI from "../assets/logo-pokeapi.png";
import styles from "../components/styles/styles-home-jss";

const HomeContainer = (props) => {
  const { classes } = props;

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className={classes.containerLogo}>
          <img
            className={classes.imagePokeApi}
            src={LogoPokeAPI}
            alt="Logo Poke-Api"
          />
          <div className={classes.containerButton}>
            <Button
              variant="contained"
              className={classes.buttonStart}
              component={Link}
              to="/pokedex"
            >
              Iniciar
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(HomeContainer);
