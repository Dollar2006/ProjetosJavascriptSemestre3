const distanciaInput = document.getElementById('distancia');
const quantidadeInput = document.getElementById('quantidade');
const regiaoInput = document.getElementById('regiao');
const rastroInput = document.getElementById('rastreamento');
const precolitroInput = document.getElementById('combustivel');

document.getElementById('freteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distancia = parseFloat(document.getElementById('distancia').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const regiao = document.getElementById('regiao').value.trim().toLowerCase();
    const rastreamento = document.getElementById('rastreamento').value;
    const precolitro = parseFloat(document.getElementById('combustivel').value);

    let valorPeca = 0;
    let desconto = 0;

    if (regiao === "sudeste") {
        valorPeca = 1.20;
        desconto = 0.12;
    } else if (regiao === "sul") {
        valorPeca = 1.00;
        desconto = 0.10;
    } else if (regiao === "centro-oeste" || regiao === "centro oeste") {
        valorPeca = 1.30;
        desconto = 0.15;
    } else {
        alert("Região inválida. Use Sudeste, Sul ou Centro-Oeste.");
        return;
    }

    // Cálculo do valor do frete pelas peças
    let valorFretePecas = 0;
    if (quantidade <= 1000) {
        valorFretePecas = quantidade * valorPeca;
    } else {
        const acima = quantidade - 1000;
        valorFretePecas = (1000 * valorPeca) + (acima * valorPeca * (1 - desconto));
    }

    // Cálculo do valor do frete por quilômetro
    const valorFreteKm = distancia * precolitro;

    // Taxa de rastreamento
    let taxaRastreamento = 0;
    if (rastreamento === "S") {
        taxaRastreamento = 10;
    }

    // Total do frete
    const totalFrete = valorFretePecas + valorFreteKm + taxaRastreamento;

    // Exibe o resultado detalhado
    document.getElementById("mensagemResultado").innerHTML =
        "Taxa do rastreamento: R$ " + taxaRastreamento.toFixed(2) + "<br>" +
        "Valor do frete pelas peças: R$ " + valorFretePecas.toFixed(2) + "<br>" +
        "Valor do frete por quilômetro (unitário): R$ " + precolitro.toFixed(2) + "<br>" +
        "Valor total do frete por quilometragem: R$ " + valorFreteKm.toFixed(2) + "<br>" +
        "<strong>Total do frete: R$ " + totalFrete.toFixed(2) + "</strong>";

    document.getElementById("resultado").style.display = "block";
});    document.getElementById("mensagemResultado").innerHTML = '';    document.getElementById("resultado").style.display = "none";    precolitroInput.value = '';    rastroInput.value = 'N';    regiaoInput.value = 'sudeste';    quantidadeInput.value = '';    distanciaInput.value = '';document.getElementById('limpar').addEventListener('click', function() {});    document.getElementById("resultado").style.display = "block";    document.getElementById("resultado").style.display = "block";