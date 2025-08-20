const resultadoParagrafo = document.getElementById('resultado'); // Garanta que seu HTML tenha um elemento com id="resultado"
const nomeInput = document.getElementById('nome');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');

function calcularIMC() {
   
    const nome = nomeInput.value;
    const peso = pesoInput.value;
    const altura = alturaInput.value;

   
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura) / 100; 
   
    if (isNaN(pesoFloat) || isNaN(alturaFloat) || alturaFloat <= 0) {
        resultadoParagrafo.textContent = "Por favor, preencha peso e altura com números válidos.";
        return;
    }

    const imc = pesoFloat / (alturaFloat * alturaFloat);

    let classificacao = '';

    if (imc < 16) {
        classificacao = 'Baixo peso muito grave';
    } else if (imc < 17) {
        classificacao = 'Baixo peso grave';
    } else if (imc < 18.5) {
        classificacao = 'Baixo peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade grau I';
    } else if (imc < 40) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    const resultadoFormatado = `${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`;
    resultadoParagrafo.textContent = resultadoFormatado;
}
