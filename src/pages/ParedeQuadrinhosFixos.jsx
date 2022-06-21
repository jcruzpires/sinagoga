import { Checkbox, Grid, FormControlLabel } from "@mui/material";
import React from "react";
import QuadrinhoFixoExAluna from "../components/QuadrinhoFixoExAluna";
import { DadosQuadrinhos } from "../util/DadosQuadrinhos";
import { makeStyles } from "@mui/styles";

function ParedeQuadrinhosFixos(isExaluna) {
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
        justifyContent='space-between'
        className={classes.parede1Container}
      >
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            if (q.posicao < 32) {
              return (
                <div className={classes.parede1Item}>
                  <QuadrinhoFixoExAluna
                    key={q.posicao}
                    exaluna={q}
                    mostrar={checked}
                  />
                </div>
              );
            }
          })}
      </Grid>

      <h1>Parede 2</h1>
      <Grid
        container
        justifyContent='center'
        className={classes.parede1Container}
      >
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            if (q.posicao > 31 && q.posicao < 31+16) {
              return (
                <div className={classes.parede2Item}>
                  <QuadrinhoFixoExAluna
                    key={q.posicao}
                    exaluna={q}
                    mostrar={checked}
                  />
                </div>
              );
            }
          })}
      </Grid>

      <h1>Parede 3</h1>
      <Grid
        container
        justifyContent='center'
        className={classes.parede1Container}
      >
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            if (q.posicao > 31+16 && q.posicao < 32+16+40) {
              return (
                <div className={classes.parede3Item}>
                  <QuadrinhoFixoExAluna
                    key={q.posicao}
                    exaluna={q}
                    mostrar={checked}
                  />
                </div>
              );
            }
          })}
      </Grid>

      <h1>Parede 4</h1>
      <Grid
        container
        justifyContent='center'
        className={classes.parede1Container}
      >
        {!!DadosQuadrinhos?.length &&
          DadosQuadrinhos?.map((q) => {
            if (q.posicao > 31+16+40 && q.posicao < 32+16+40+28) {
              return (
                <div className={classes.parede4Item}>
                  <QuadrinhoFixoExAluna
                    key={q.posicao}
                    exaluna={q}
                    mostrar={checked}
                  />
                </div>
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
  parede1Item: {
    width: 'calc(100% * (1/8) - 10px - 1px)',
  },
  parede2Item: {
    display: 'block',
    width: 'calc(100% * (1/4) - 65px - 1px)',
  },
  parede3Item: {
    width: 'calc(100% * (1/10) - 1px - 1px)',
  },
  parede4Item: {
    width: 'calc(100% * (1/7) - 10px - 1px)',
  }
}));

export default ParedeQuadrinhosFixos;
