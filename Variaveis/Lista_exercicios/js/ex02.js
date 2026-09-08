const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  
  const valor = Number(document.querySelector("#inValor").value);
  const tempo = Number(document.querySelector("#inTempo").value);
  const total = Math.ceil(tempo / 15) * valor;

  let resp = document.querySelector("#outPagar");
  if (!resp) {
    resp = document.createElement("h3");
    resp.id = "outPagar";
    frm.appendChild(resp);
  }

  resp.innerText = `Valor a Pagar R$: ${total.toFixed(2)}`;
});