let valor = parseInt(prompt("Informe um número inteiro positivo para continuar: "));
let resultado = calcularFatorial(valor);

function calcularFatorial(valor) {
    let fatorial = 1;

    for (let i = valor; i > 1; i--) {
        fatorial *= i;
    }

    return fatorial;
}

console.log(`O fatorial de ${valor} é: ${resultado}`);