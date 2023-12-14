const form = document.getElementsByTagName("form")[0];
const consumoAparelhoEl = form["consumo-aparelho"];
const periodoConsumoEl = form["periodo-consumo"];
const horasDiariasUsoEl = form["horas-diarias-uso"];
const diasUsoMesEl = form["dias-uso-mes"];
const precoEnergiaEl = form["preco-energia"];
const botaoCalcular = form["botao-calcular"];

function calcularGasto(evt){
    evt.preventDefault();
    const consumoAparelho = consumoAparelhoEl.value.replace(",",".");
    const periodoConsumo =  periodoConsumoEl.value;
    const consumoDiarioAparelho = 
    periodoConsumo === "mes" ? consumoAparelho/30 : consumoAparelho/365;
    const horasDiariasUso = horasDiariasUsoEl.value.replace(",",".");
    const diasUsoMes = diasUsoMesEl.value;
    const precoEnergia = precoEnergiaEl.value.replace(",",".");

  const custo =
    consumoDiarioAparelho * horasDiariasUso * diasUsoMes * precoEnergia *1.40;
  const consumoEl = document.getElementById("consumo");

  consumoEl.innerText = custo.toFixed(2).replace(".", ",");
}

botaoCalcular.addEventListener("click", calcularGasto);

