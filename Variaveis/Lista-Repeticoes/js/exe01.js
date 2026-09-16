const btIniciar = document.getElementById("btIniciar");
const outResultado = document.getElementById("outResultado");

btIniciar.addEventListener("click", function() {
    let soma = 0;
    let numero;

    do {
        let entrada = prompt("Digite um número (digite 0 para encerrar):");

        if (entrada === null) {
            return;
        }

        numero = parseFloat(entrada);
      
        if (isNaN(numero)) {
            alert("Por favor, digite um número válido.");
            numero = 1; 
            continue;
        }
       
        if (numero !== 0) {
            soma += numero;
        }

    } while (numero !== 0);
   
    outResultado.textContent = "A soma total dos números é: " + soma;
});