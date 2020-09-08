import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.pokemonCharactersContainer}>
      <Typography gutterBottom variant="h5" component="h2">
        {props.namePokemon}
      </Typography>
      <img src={props.srcPokemon} />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Habilidades" {...a11yProps(0)} />
          <Tab label="Movimientos" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.habilitiesPokemon ? (
          props.habilitiesPokemon.map((ability) => {
            return (
              <Typography gutterBottom variant="h5" component="h2">
                {ability.ability.name}
                {ability.ability.url}
              </Typography>
            );
          })
        ) : (
          <div className={classes.containerProgress}>
            <CircularProgress />
          </div>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.movesPokemon ? (
          props.movesPokemon.map((move) => {
            return (
              <Typography gutterBottom variant="h5" component="h2">
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
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default withStyles(styles)(PokemonCharacters);
