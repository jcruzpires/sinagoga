import { DadosQuadrinhos } from "./DadosQuadrinhos";
const numeroTotalQuadrinhos = 114;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const inicioPerguntas = [
  "Qual o ano da formatura do ",
  "Qual o curso do ",
];

const gerarInicioDePergunta = (q) => {
  return inicioPerguntas[q-1];
};

const gerarTipoPergunta = () => {
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
};

const selecionarExAluna = () => {
  return Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0;
};

export const montarQA = () => {
  const qualExala = selecionarExAluna();
  const tipoDePergunta = gerarTipoPergunta();
  var Q =
    gerarInicioDePergunta(tipoDePergunta) +
    DadosQuadrinhos[qualExala].nome +
    "?";

  var opcoesResposta = [];
  var opcaoCorreta;

  switch (tipoDePergunta) {
    case 1:
      opcaoCorreta = DadosQuadrinhos[qualExala].ano;
      opcoesResposta.push(DadosQuadrinhos[qualExala].ano);
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].ano
      );
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].ano
      );
      break;
    case 2:
      opcaoCorreta = DadosQuadrinhos[qualExala].curso;
      opcoesResposta.push(DadosQuadrinhos[qualExala].curso);
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].curso
      );
      opcoesResposta.push(
        DadosQuadrinhos[
          Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
        ].curso
      );
      break;
    default:
      break;
  }

  opcoesResposta = shuffle(opcoesResposta);

  const novaQA = {
    pergunta: Q,
    opcoes: opcoesResposta,
    respostaCorreta: opcaoCorreta,
  };

  return novaQA;
};

export const montarQuemE = () => {
  const qualExala = selecionarExAluna();
  var foto = DadosQuadrinhos[qualExala].foto;

  var opcoesResposta = [];
  var opcaoCorreta  = DadosQuadrinhos[qualExala].nome;

  opcoesResposta.push(opcaoCorreta);
  opcoesResposta.push(
    DadosQuadrinhos[
      Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
    ].nome
  );
  opcoesResposta.push(
    DadosQuadrinhos[
      Math.floor(Math.random() * (numeroTotalQuadrinhos - 1 - 0 + 1)) + 0
    ].nome
  );

  opcoesResposta = shuffle(opcoesResposta);

  const novaQuemE = {
    pergunta: foto,
    opcoes: opcoesResposta,
    respostaCorreta: opcaoCorreta,
  };

  return novaQuemE;
};
