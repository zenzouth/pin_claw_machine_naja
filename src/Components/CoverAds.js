import * as React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function CoverAds() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <img
        src="https://zortout.com/wp-content/uploads/2023/03/SEO2-3.jpg"
        style={{ width: "100%", height: "450px", objectFit: "cover" }}
      />
    </>
  );
}
