const btIniciar = document.getElementById("btIniciar");
const outResultado = document.getElementById("outResultado");

btIniciar.addEventListener("click", () => {
    let soma = 0;
    let quantidade = 0;
    let resposta = "sim";

    while (resposta.toLowerCase() === "sim") {
        let notaStr = prompt("Digite uma nota (de 0 a 10):");

        if (notaStr === null) {
            break;
        }

        let nota = Number(notaStr);

        
        if (notaStr.trim() !== "" && !isNaN(nota) && nota >= 0 && nota <= 10) {
            soma += nota;
            quantidade++;

            let respostaPrompt = prompt("Deseja continuar? (sim/nao)");
            if (respostaPrompt === null) {
                break;
            }
            resposta = respostaPrompt.trim().toLowerCase();
        } else {
            alert("Por favor, digite uma nota válida entre 0 e 10.");
            resposta = "sim";
        }
    }

    let respostaFinal = "-----------------------------------\n";

    if (quantidade > 0) {
        let media = soma / quantidade;
       
        respostaFinal += `Quantidade de notas lidas: ${quantidade}\n`;
        respostaFinal += `A média das notas é: ${media.toFixed(2)}\n`;
    } else {
        respostaFinal += "Nenhuma nota foi registrada.\n";
    }

    respostaFinal += "-----------------------------------";

    outResultado.textContent = respostaFinal;
});