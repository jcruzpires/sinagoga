import { Checkbox, Grid, FormControlLabel } from "@mui/material";
import React from "react";
import QuadrinhoFixoExAluna from "../components/QuadrinhoFixoExAluna";
import { DadosHomenageados } from "../util/DadosHomenageados";
import { makeStyles } from "@mui/styles";

function ParedeHomenageados(isExaluna) {
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

      <h1>Homenageados</h1>
      <Grid
        container
        justifyContent="center"
        className={classes.parede1Container}
      >
        {!!DadosHomenageados?.length &&
          DadosHomenageados?.map((q) => {
              return (
                <QuadrinhoFixoExAluna
                  key={q.posicao}
                  exaluna={q}
                  mostrar={checked}
                />
              );
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

export default ParedeHomenageados;
