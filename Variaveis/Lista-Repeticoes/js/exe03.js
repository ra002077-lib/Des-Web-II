const btIniciar = document.getElementById("btIniciar");
const outResultado = document.getElementById("outResultado");

btIniciar.addEventListener("click", () => {
    let soma = 0;
    let cancelado = false;

    for (let i = 1; i <= 10; i++) {
        
        let numStr = prompt(`Digite o ${i}º número:`);        
        
        if (numStr === null) {
            cancelado = true;
            break;
        }

        let numero = Number(numStr);
        
        
        if (numStr.trim() !== "" && !isNaN(numero)) {
            soma += numero;
        } else {
            alert("Valor inválido! Por favor, digite um número.");
            i--; 
        }
    }

    let respostaFinal = "-----------------------------------\n";
    
    if (!cancelado) {
        let media = soma / 10;
        respostaFinal += `A soma dos 10 números é: ${soma.toFixed(2)}\n`;
        respostaFinal += `A média dos 10 números é: ${media.toFixed(2)}\n`;
    } else {
        respostaFinal += "Operação cancelada pelo usuário.\n";
    }
    
    respostaFinal += "-----------------------------------";
    
    outResultado.textContent = respostaFinal;
});