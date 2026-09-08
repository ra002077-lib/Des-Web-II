const frm = document.querySelector("form");
const resp = document.querySelector("#outResposta");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const numero = Number(document.querySelector("#inNumero").value);
  const resultado = (numero % 2 === 0) ? "Par" : "Ímpar";
  
  resp.innerText = `${numero} é ${resultado}`;
});