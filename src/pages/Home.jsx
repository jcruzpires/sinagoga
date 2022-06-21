import { Grid, Typography, Button, Menu, MenuItem } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" className={classes.root}>
        <Link className={classes.link} to="parede">
          <Typography>Ex-alunos (PC)</Typography>
        </Link>
        <Link className={classes.link} to="parede-mobile">
          <Typography>Ex-alunos (Mobile)</Typography>
        </Link>
        <Link className={classes.link} to="quiz">
          <Typography>Quiz</Typography>
        </Link>
      </Grid>
    </>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    height: "98vh",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "rgb(107, 62, 149)",
    padding: "0px 60px 0px 60px",
    
  },
}));

export default Home;