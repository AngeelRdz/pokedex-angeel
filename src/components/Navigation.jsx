import React from "react";
import { Link } from "react-router-dom";

import { withStyles, useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";

import styles from "./styles/styles-menu-jss";

function Navigation(props) {
  const { classes } = props;
  const theme = useTheme();
  const {
    window,
    onHandlerOpenNavigationDesktop,
    onHandlerCloseNavigationDesktop,
    onHandlerOpenNavigationMobile,
    onHandlerCloseNavigationMobile,
  } = props;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List onClick={onHandlerCloseNavigationMobile}>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List onClick={onHandlerCloseNavigationMobile}>
        <ListItem button component={Link} to="/pokedex">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Pokedex" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={onHandlerOpenNavigationMobile}
            onClose={onHandlerCloseNavigationMobile}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Toolbar />
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={onHandlerOpenNavigationDesktop}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={onHandlerCloseNavigationDesktop}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List onClick={onHandlerCloseNavigationDesktop}>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
            <Divider />
            <List onClick={onHandlerCloseNavigationDesktop}>
              <ListItem button component={Link} to="/pokedex">
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Pokedex" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default withStyles(styles)(Navigation);