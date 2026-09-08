const frm = document.querySelector("form");
const resp1 = document.querySelector("#outTriangulo");
const resp2 = document.querySelector("#outTipo");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); 
 
  const ladoA = Number(document.querySelector("#inLadoA").value);
  const ladoB = Number(document.querySelector("#inLadoB").value);
  const ladoC = Number(document.querySelector("#inLadoC").value);

  if (ladoA >= ladoB + ladoC || ladoB >= ladoA + ladoC || ladoC >= ladoA + ladoB) {
    resp1.innerText = "Lados não podem formar um triângulo";
    resp2.innerText = ""; 
    return;
  }
 
  resp1.innerText = "Lados podem formar um triângulo";

  if (ladoA === ladoB && ladoB === ladoC) {
    resp2.innerText = "Tipo: Equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    resp2.innerText = "Tipo: Isósceles";
  } else {
    resp2.innerText = "Tipo: Escaleno";
  }
});