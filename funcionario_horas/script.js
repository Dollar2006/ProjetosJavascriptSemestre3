const horasTrabInput = document.getElementById("horas")
const turnoInput = document.getElementById("turno")
const categoriaInput = document.getElementById("categoria")
const salarioMinInput = document.getElementById("salariomin")
const codigoInput = document.getElementById("codigo")
const resultado = document.getElementById("mensagemResultado")

function CalculaSalario(event){
   if (event) event.preventDefault();
   
   const codigo = codigoInput.value;
   const horasTrab = Number(horasTrabInput.value);
   const turno = turnoInput.value;
   const categoria = categoriaInput.value;
   const salariomin = Number(salarioMinInput.value);
   let salarioInicial = 0;
   let auxilioAlimentacao = 0;
   let salarioFinal = 0;
   let valorHora = 0;

   if (categoria == 'G' && (turno == 'M' || turno == 'V')){
        valorHora = salariomin * 0.04;
        salarioInicial = valorHora * horasTrab;
   }
   else if (categoria == 'F' && turno == 'N'){
        valorHora = salariomin * 0.02;
        salarioInicial = valorHora * horasTrab;
   }
   else if (categoria == 'F' && (turno == 'M' || turno == 'V')){
        valorHora = salariomin * 0.01;
        salarioInicial = valorHora * horasTrab;
   }

   if (salarioInicial <= 800){
        auxilioAlimentacao = salarioInicial * 0.25;
   }
   else if (salarioInicial > 800 && salarioInicial <= 1200){
        auxilioAlimentacao = salarioInicial * 0.2;
   }
   else {
        auxilioAlimentacao = salarioInicial * 0.15;
   }
   salarioFinal = salarioInicial + auxilioAlimentacao;

   resultado.innerHTML = `
      <strong>Código do Funcionário:</strong> ${codigo}<br>
      <strong>Número de horas trabalhadas:</strong> ${horasTrab}<br>
      <strong>Valor da hora trabalhada:</strong> R$ ${valorHora.toFixed(2)}<br>
      <strong>Salário inicial:</strong> R$ ${salarioInicial.toFixed(2)}<br>
      <strong>Auxílio alimentação:</strong> R$ ${auxilioAlimentacao.toFixed(2)}<br>
      <strong>Salário final:</strong> R$ ${salarioFinal.toFixed(2)}<br>
   `
   console.log("A função funcionou!")
}