import { Checkbox, Grid, FormControlLabel } from "@mui/material";
import React from "react";
import QuadrinhoFixoExAluna from "../components/QuadrinhoFixoExAluna";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";
import { makeStyles } from "@mui/styles";

function ParedeMobile(isExaluna) {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Mostrar Fotos"
      />

      <h1>Parede 1</h1>
      <Grid
        container
        justifyContent="space-between"
        className={classes.parede1Container}
      >
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            if (q.posicao < 32) {
              return (
                <QuadrinhoFixoExAluna
                  key={q.posicao}
                  exaluna={q}
                  mostrar={checked}
                />
              );
            }
          })}
      </Grid>

      <h1>Parede 2</h1>
      <Grid
        container
        justifyContent="center"
        className={classes.parede1Container}
      >
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            if (q.posicao > 31 && q.posicao < 31 + 16) {
              return (
                <QuadrinhoFixoExAluna
                  key={q.posicao}
                  exaluna={q}
                  mostrar={checked}
                />
              );
            }
          })}
      </Grid>

      <h1>Parede 3</h1>
      <Grid
        container
        justifyContent="center"
        className={classes.parede1Container}
      >
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            if (q.posicao > 31 + 16 && q.posicao < 32 + 16 + 40) {
              return (
                <QuadrinhoFixoExAluna
                  key={q.posicao}
                  exaluna={q}
                  mostrar={checked}
                />
              );
            }
          })}
      </Grid>

      <h1>Parede 4</h1>
      <Grid
        container
        justifyContent="center"
        className={classes.parede1Container}
      >
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            if (q.posicao > 31 + 16 + 40 && q.posicao < 32 + 16 + 40 + 28) {
              return (
                <QuadrinhoFixoExAluna
                  key={q.posicao}
                  exaluna={q}
                  mostrar={checked}
                />
              );
            }
          })}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  parede1Container: {
    display: "flex",
  },
}));

export default ParedeMobile;
