import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Hidden from "@material-ui/core/Hidden";

import HomeContainer from "./container/HomeContainer";
import PokedexContainer from "./container/PokedexContainer";
import Navigation from "./components/Navigation";
import PokemonByIdContainer from "./container/PokemonByIdContainer";

import styles from "./components/styles/styles-menu-jss";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <div className={classes.root}>
        <HideOnScroll {...props}>
          <AppBar className={classes.appBarBackground}>
            <Toolbar>
              <Hidden smUp implementation="css">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden xsDown implementation="css">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Navigation
          onHandlerOpenNavigationDesktop={open}
          onHandlerCloseNavigationDesktop={handleDrawerClose}
          onHandlerOpenNavigationMobile={mobileOpen}
          onHandlerCloseNavigationMobile={handleDrawerToggle}
        />

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
          onClick={handleDrawerClose}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route exact path="/pokedex">
              <PokedexContainer />
            </Route>
            <Route exact path="/pokemon/:id">
              <PokemonByIdContainer />
            </Route>
            <Route>
              <h1>404 Not found</h1>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default withStyles(styles)(App);
