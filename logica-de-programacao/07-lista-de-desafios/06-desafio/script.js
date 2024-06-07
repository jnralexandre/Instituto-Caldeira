let numero = parseInt(prompt("Informe um número para continuar: "));

exibirTabuada(numero);

function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}