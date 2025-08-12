const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2"); 
const nota3Input = document.getElementById("nota3");
const nota1 = parseFloat(nota1Input.value);
const nota2 = parseFloat(nota2Input.value);
const nota3 = parseFloat(nota3Input.value);
const peso1 = 2;
const peso2 = 5;
const peso3 = 3;

function calcularMediaPonderada() {
  const nota1 = parseFloat(nota1Input.value);
  const nota2 = parseFloat(nota2Input.value);
  const nota3 = parseFloat(nota3Input.value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor, insira valores válidos para as notas.");
    return;
  }

  const mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);
  const resultado = document.getElementById("resultado");

  if (mediaPonderada < 5){
      resultado.textContent ="A media do aluno é: " + mediaPonderada + ". \nSua classificação é F"
  }
  else if(mediaPonderada >= 5 && mediaPonderada <= 6){
    resultado.textContent = "A media do aluno é: " + mediaPonderada + ". \nSua classificação é E"
  }
  else if(mediaPonderada >= 6 && mediaPonderada <= 7){
    resultado.textContent ="A media do aluno é: " + mediaPonderada + ". \nSua classificação é D"
  }
  else if(mediaPonderada >= 7 && mediaPonderada <= 8){
    resultado.textContent ="A media do aluno é: " + mediaPonderada + ". \nSua classificação é C"
  }
  else if(mediaPonderada >= 8 && mediaPonderada <= 9){
    resultado.textContent = "A media do aluno é: " + mediaPonderada + ". \nSua classificação é B"
  }
  else{
    resultado.textContent ="A media do aluno é: " + mediaPonderada + ". \nSua classificação é A"
  }


  
  
 
}                                       