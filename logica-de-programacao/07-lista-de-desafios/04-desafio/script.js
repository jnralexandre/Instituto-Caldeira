let altura = Number(prompt("Por favor, informe a altura para calcular a área: "));
let largura = Number(prompt("Por favor, informe a largura para calcular a área: "));

calcularAreaEPerimetro(altura, largura);

function calcularAreaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    return console.log(`A área é: ${area}, e o perímetro: ${perimetro}`);
}