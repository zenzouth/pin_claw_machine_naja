import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
        <br></br>
        <br></br>
        <Grid container spacing={2} paddingX={4} paddingY={2} style={{ backgroundColor: '#273746' , color : '#fff' }} >
            <Grid item xs={12} lg={12} paddingY={2} container justify="center" alignItems="center" direction="column">
                <footer>
                <Typography variant="caption" >Copyright 2023 - {currentYear} by zonecos. All Rights Reserved.  </Typography>
                </footer>
            </Grid>
        </Grid>

    </>
  );
}
