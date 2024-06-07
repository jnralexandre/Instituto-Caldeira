retornarOMaiorValor(9, 12);

function retornarOMaiorValor(valor1, valor2) {
    if (valor1 > valor2) {
        return console.log(`O valor: ${valor1} é maior que: ${valor2}`)
    } else if (valor2 > valor1) {
        return console.log(`O valor: ${valor2} é maior que: ${valor1}`)
    }

    return console.log(`Os valores são iguais`);
}