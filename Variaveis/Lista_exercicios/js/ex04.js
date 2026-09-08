functioncalcularPromocao ()
{
    const inMedicamento = document.getElementById("inMedicamento").value;
    const inPreco = Number(document.getElementById("inPreco").value);
    const total = inPreco * 2;
    const valorPromocional = Math.floor(total);
    document.getElementById("outMedicamento").textContent = "Promoção de: " + inMedicamento;
    document.getElementById("outPromoicao").textcontent = "Leve2 por apenas R$: " + valorPromocional.toFixed(2);

}
document.getElementById("btCalcular").addEventListener("click", calcularPromocao);