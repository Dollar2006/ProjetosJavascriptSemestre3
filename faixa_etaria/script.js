const idadeInput = document.getElementById("ageInput");
const resultado = document.getElementById("resultado");

function faixa_etaria() {
  const idadeinformada = parseInt(idadeInput.value);

  if (idadeinformada >= 0 && idadeinformada < 15) {
    resultado.textContent = "Criança";
  } else if (idadeinformada >= 15 && idadeinformada < 30) {
    resultado.textContent = "Jovem";
  } else if (idadeinformada >= 30 && idadeinformada < 60) {
    resultado.textContent = "Adulto";
  } else if (idadeinformada >= 60) { 
    resultado.textContent = "Idoso";
  } else {
    resultado.textContent = "Por favor, insira uma idade válida.";
  }
}