import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from "./styles/styles-pokemon-by-id-jss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const PokemonCharacters = (props) => {
  const { classes } = props;
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [effectsPokemon, setEffectsPokemon] = React.useState();
  const [effectsShortPokemon, setEffectsShortPokemon] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = (url) => {
    console.log('jajaja', url);
    getPokemonAbilities(url)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPokemonAbilities = async (url) => {
    try {
      setLoading(true);
      let URL = `${url}`;
      const res = await axios.get(URL);
      const data = res.data;
      console.log("Elements pokemon abilities:", data);

      const effectsPokemons = data.effect_entries;
      console.log("Moves::", effectsPokemons);
      const effect = effectsPokemons.filter(word => word.language.name === 'en');
      console.log('filter:', effect);
      const effectNormal = effect[0].effect;
      const effectShort = effect[0].short_effect;

    //   const habilitiesPokemonById = data.abilities;
    // //   console.log("Abilities::", habilitiesPokemonById);
    //   const typesPokemonById = data.types;
    // //   console.log("Types::", typesPokemonById);
    //   const imagePokemonById = data.sprites.other.dream_world.front_default;
    // //   console.log("imagePokemon::", imagePokemonById);
    //   setImagePokemon(imagePokemonById);
    setEffectsPokemon(effectNormal);
    setEffectsShortPokemon(effectShort);
    //   setHabilitiesPokemon(habilitiesPokemonById);
    //   setTypesPokemon(typesPokemonById);
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className={classes.pokemonCharactersContainer}>
      <Paper elevation={3} className={classes.paperCharactersContainer}>
        <div className={classes.containerNamePokemon}>
          <Typography gutterBottom variant="h2" component="h2">
            {props.namePokemon}
          </Typography>
        </div>
        <div className={classes.containerDataPokemon}>
          <div className={classes.containerImage}>
            <img
              src={props.srcPokemon}
              className={classes.containerImagePokemon}
            />
          </div>
          <div className={classes.containerText}>
            <Typography gutterBottom variant="h5" component="h5">
              Experiencia base: {props.baseExperiencePokemon}
            </Typography>
            <Typography gutterBottom variant="h5" component="h5">
              Altura: {props.heightPokemon} cms
            </Typography>
            <Typography gutterBottom variant="h5" component="h5">
              Peso: {props.weightPokemon} kg
            </Typography>
            <Typography gutterBottom variant="h5" component="h5">
              Tipo:
              {props.typePokemon ? (
                props.typePokemon.map((type) => {
                  return (
                    <Typography variant="h6" component="h6">
                      {type.type.name}
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
        </div>
      </Paper>
      <div>
        <Button
          variant="contained"
          size="small"
          color="primary"
          component={Link}
          to={`/pokemonEvolutions/${props.idPokemon}`}
        >
          Ver evoluciones
        </Button>
      </div>
      <AppBar
        position="static"
        color="default"
        className={classes.containerTabs}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab className={classes.tabContainerText} label="Habilidades" {...a11yProps(0)} />
          <Tab className={classes.tabContainerText} label="Movimientos" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.containerTabPanel}>
        {props.habilitiesPokemon ? (
          props.habilitiesPokemon.map((ability) => {
            return (
              <div>
                <Typography className={classes.textTabs}>
                  {ability.ability.name}
                </Typography>
                <Button onClick={()=>handleOpen(ability.ability.url)}>
                  Detalle de la habilidad
                </Button>
              </div>
            );
          })
        ) : (
          <div className={classes.containerProgress}>
            <CircularProgress />
          </div>
        )}
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.containerTabPanel}>
        {props.movesPokemon ? (
          props.movesPokemon.map((move) => {
            return (
              <Typography className={classes.textTabs}>
                {move.move.name}
              </Typography>
            );
          })
        ) : (
          <div className={classes.containerProgress}>
            <CircularProgress />
          </div>
        )}
      </TabPanel>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
            <DialogContentText>
              {loading ? (
                <div className={classes.containerProgress}>
                  <CircularProgress />
                </div>
                ) : (
                  <div>
                    <Typography>{effectsPokemon}</Typography>
                    <Typography>{effectsShortPokemon}</Typography>
                  </div>
              )}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
        </DialogActions>
      </Dialog>   
    </div>
  );
};

export default withStyles(styles)(PokemonCharacters);
