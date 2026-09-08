const frm = document.querySelector("form");
const resp1 = document.querySelector("#outMedicamento");
const resp2 = document.querySelector("#outPromocao");


frm.addEventListener("submit", (e) => {
  e.preventDefault(); 

 
  const medicamento = document.querySelector("#inMedicamento").value;
  const preco = Number(document.querySelector("#inPreco").value);

 
  const totalPromocao = Math.floor(preco * 2);

  
  resp1.innerText = `Promoção de ${medicamento}`;
  resp2.innerText = `Leve 2 por apenas R$: ${totalPromocao.toFixed(2)}`;
});