const frm = document.querySelector("form");
const resp = document.querySelector("#outSituacao");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const velPermitida = Number(document.querySelector("#inVelPermitida").value);
  const velCondutor = Number(document.querySelector("#inVelCondutor").value);

  const limite20 = velPermitida * 1.20;
  if (velCondutor <= velPermitida) {
    resp.innerText = "Situação: Sem Multa";
  } else if (velCondutor <= limite20) {
    resp.innerText = "Situação: Multa Leve";
  } else {
    resp.innerText = "Situação: Multa Grave";
  }
});