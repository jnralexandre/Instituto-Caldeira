let numeroRecebido = prompt("Por favor, informe um número para continuar: ");
let numero = Number(numeroRecebido);

if (numero > 0) {
    console.log(`O número informado é positivo!`);
} else if (numero < 0) {
    console.log(`O número informado é negativo!`);
} else {
    console.log(`O número informado é neutro!`);
}
