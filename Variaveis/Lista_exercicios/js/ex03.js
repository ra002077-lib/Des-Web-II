const frm = document.querySelector("form");
const resp1 = document.querySelector("#outPromocao");
const resp2 = document.querySelector("#outTerceiro");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); 

 
  const produto = document.querySelector("#inProduto").value;
  const preco = Number(document.querySelector("#inPreco").value);

 
  const terceiro = preco * 0.5;
  const total = (preco * 2) + terceiro;

  
  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
  resp2.innerText = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`;
});