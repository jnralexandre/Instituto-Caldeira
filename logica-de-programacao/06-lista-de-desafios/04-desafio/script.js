media(9, 12, 9);

let valor1;
let valor2;
let valor3;

function media(valor1, valor2, valor3) {
    let soma = (valor1 + valor2 + valor3);

    let media = soma / 3;

    return console.log(`A média dos valores: ${valor1}; ${valor2}; ${valor3}; é: ${media};`);
}