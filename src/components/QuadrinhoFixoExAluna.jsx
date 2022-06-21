import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function QuadrinhoFixoExAluna(obj) {
  const [isFlipped, setIsFlipped] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Button
        onClick={handleClick}
        className={classes.parteFrente}
        sx={{
          width: 170,
          height: 240,
          objectFit: "cover"
        }}
      >
        {obj.mostrar ? (
          <img
            src={obj.exaluna.foto}
            width={170}
            height={240}
            sx={{ objectFit: "cover" }}
          />
        ) : (
          <Typography
            fontSize={28}
          >
            {obj.exaluna.posicao}
          </Typography>
        )}
      </Button>

      <Button
        onClick={handleClick}
        className={classes.parteTras}
        sx={{
          width: 170,
          height: 240,
          color: "white",
          backgroundColor: "rgb(129, 171, 240)",
          objectFit: "cover",
          "&:hover": {
            color: "white",
            backgroundColor: "rgb(85, 131, 207)",
          },
        }}
      >
        <Typography fontSize={14} fontWeight={600}>
          {obj.exaluna.nome} <br></br>
          <br></br>
          {obj.exaluna.apelido ? "(" + obj.exaluna.apelido + ")" : <>-</>}
          <br></br>
          <br></br>
          {obj.exaluna.curso}
          <br></br>
          {obj.exaluna.ano}
          <br></br>
          <br></br>
          {obj.exaluna.cidade}
        </Typography>
      </Button>
    </ReactCardFlip>
  );
}

const useStyles = makeStyles(() => ({
  parteTras: {
    width: 170,
    height: 240,
    texTransform: "lowercase",
    ".MuiButton‑text": {
      texTransform: "lowercase",
    },
    objectFit: "cover",
  },
  parteFrente: {
    width: 170,
    height: 240,
    objectFit: "cover",
  },
}));
