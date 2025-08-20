const dataInput = document.getElementById('data');
const resultado = document.getElementById('resultado');

function converterData() {
    const data = dataInput.value;
    const partesData = data.split('/');
    if (partesData.length !== 3) {
        resultado.textContent = "Por favor, insira a data no formato dd/mm/aaaa.";
        return;
    }
    else {
        const dia = parseInt(partesData[0], 10);
        const mes = parseInt(partesData[1], 10);
        const ano = parseInt(partesData[2], 10);
        if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1) {
            resultado.textContent = "Data inválida. Por favor, insira uma data válida no formato dd/mm/aaaa.";
            return;
        }
        const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const dataPorExtenso = `${dia} de ${meses[mes - 1]} de ${ano}`;
        resultado.textContent = dataPorExtenso;
    }
}