let verificaNumero = prompt("Por favor, informe um número para continuar!");

if (verificaNumero > 0) {
    alert(`O número ${verificaNumero} é positivo`);
} else if (verificaNumero < 0) {
    alert(`O número ${verificaNumero} é negativo`);
} else {
    alert(`O número ${verificaNumero} é neutro`);
}