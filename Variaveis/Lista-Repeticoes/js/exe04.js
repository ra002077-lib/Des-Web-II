const btIniciar = document.getElementById("btIniciar");
const outResultado = document.getElementById("outResultado");

btIniciar.addEventListener("click", () => {
    let quantidadePessoas = 0;
    let somaIdades = 0;
    let resposta = "sim";
   
    while (resposta === "sim") {
        let nome = prompt("Digite o nome da pessoa:");        
        
        if (nome === null) {
            break;
        }

        let idadeStr = prompt(`Digite a idade de ${nome}:`);
        
        if (idadeStr === null) {
            break;
        }

        let idade = Number(idadeStr);

     
        if (!isNaN(idade) && idade >= 0) {
            somaIdades += idade;
            quantidadePessoas++;
        } else {
            alert("Idade inválida! Este registro será desconsiderado.");
        }

       
        let respostaPrompt = prompt("Deseja cadastrar outra pessoa? (sim/nao)");
        
        if (respostaPrompt === null) {
            break;
        }
        
        
        resposta = respostaPrompt.trim().toLowerCase();
    }

   
    let respostaFinal = "-----------------------------------\n";
    
    if (quantidadePessoas > 0) {
        let mediaIdade = somaIdades / quantidadePessoas;
        respostaFinal += `Quantidade de pessoas cadastradas: ${quantidadePessoas}\n`;
        respostaFinal += `A idade média entre elas é: ${mediaIdade.toFixed(2)} anos\n`;
    } else {
        respostaFinal += "Nenhum cadastro foi realizado.\n";
    }
    
    respostaFinal += "-----------------------------------";
    
    //
    outResultado.textContent = respostaFinal;
});