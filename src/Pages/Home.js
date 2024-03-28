import * as React from "react";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';

import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Chip from '@mui/material/Chip';

export default function HomePage() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const currentYear = new Date().getFullYear();

    return (
    <>

test

    </>
  );
}
