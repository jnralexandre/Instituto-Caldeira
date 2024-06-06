let pontuacao = 0;

let respostaQuiz = 4000;

let perguntaQuiz = prompt("Valendo 100 pontos, quanto é 2000 + 2000?");

if (perguntaQuiz == respostaQuiz) {
    pontuacao = 100;
    alert(`Sua pontuação: ${pontuacao}. Parabéns, você venceu!`);
} else if (pontuacao < 100) {
    pontuacao = 0;
    alert(`Sua pontuação: ${pontuacao}. Tente novamente!`);
}