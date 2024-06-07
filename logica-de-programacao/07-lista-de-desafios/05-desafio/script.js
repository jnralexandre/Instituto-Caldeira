let pi = 3.14;
let raio = prompt("Por favor, informe o raio para calcular a área e a circunferência: ");
calcularAreaECircunferencia(raio);

function calcularAreaECircunferencia(raio) {
    let area = pi * (raio * raio);
    let circunferência = (2 * pi) * raio;

    return console.log(`A área é: ${area} e a circunferência é: ${circunferência}`);
}

