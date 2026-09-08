const frm = document.querySelector("form");
const respTempo = document.querySelector("#outTempo");
const respTroco = document.querySelector("#outTroco");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const valor = Number(document.querySelector("#inValor").value);

 
  respTempo.innerText = "";
  respTroco.innerText = "";

 
  if (valor < 1.00) {
    respTempo.innerText = "Valor Insuficiente";
    return;
  }

  let tempo;
  let troco = 0;
 
  if (valor >= 3.00) {
    tempo = 120;
    troco = valor - 3.00;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1.00;
  }
 
  respTempo.innerText = `Tempo: ${tempo} min`;

  if (troco > 0) {
    respTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;
  }
});