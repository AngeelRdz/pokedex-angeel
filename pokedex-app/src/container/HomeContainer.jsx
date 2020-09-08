import React, { useEffect, useState } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const HomeContainer = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>HOME</Typography>
      </Grid>
    </Grid>
  );
};

export default HomeContainer;