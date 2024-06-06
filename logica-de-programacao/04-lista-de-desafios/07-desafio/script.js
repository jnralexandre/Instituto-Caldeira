let idadeRecebida = prompt("Por favor, informe sua idade para continuar: ");

let palavraMaior = idadeRecebida >= 18 ? "maior" : "menor";

if (idadeRecebida) {
    console.log(`O usuário é ${palavraMaior} de idade.`);
}