const btIniciar = document.getElementById("btIniciar");
const outResultado = document.getElementById("outResultado");

btIniciar.addEventListener("click", () => {
    let qtdAprovados = 0;
    let qtdReprovados = 0;
    let cancelado = false;
    let relatorioIndividual = "";

    for (let i = 1; i <= 5; i++) {
        let notaStr = prompt(`Digite a nota do ${i}º aluno (0 a 10):`);
        
        if (notaStr === null) {
            cancelado = true;
            break;
        }

        let nota = Number(notaStr);

        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            relatorioIndividual += `${i}º Aluno (Nota: ${nota.toFixed(1)}) - `;
            
            if (nota >= 6.0) {
                relatorioIndividual += "APROVADO\n";
                qtdAprovados++;
            } else {
                relatorioIndividual += "REPROVADO\n";
                qtdReprovados++;
            }
        } else {
            alert("Nota inválida! Por favor, digite um valor entre 0 e 10.");
            i--; 
        }
    }

    let respostaFinal = "-----------------------------------\n";
    
    if (!cancelado) {
        respostaFinal += relatorioIndividual;
        respostaFinal += "-----------------------------------\n";
        respostaFinal += "========= RESUMO DA TURMA =========\n";
        respostaFinal += `Total de alunos aprovados: ${qtdAprovados}\n`;
        respostaFinal += `Total de alunos reprovados: ${qtdReprovados}\n`;
    } else {
        respostaFinal += "Operação cancelada pelo usuário.\n";
    }
    
    respostaFinal += "-----------------------------------";
    
    outResultado.textContent = respostaFinal;
});