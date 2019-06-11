import Chart from './Chart.js';


var btnDos = document.querySelector("#btnDos");
btnDos.addEventListener("click", calculate);

var tabla = document.querySelector("#tabla");
var canvas = document.getElementById('Graphic');
var chart = new Chart(canvas, resolveFunction);


function calculate(){
    tabla.innerHTML = "";
    let form = document.querySelector("#form");

    if(form.checkValidity()===true){
    let iteraciones = 1000;
    let valorInicial = Number(document.querySelector("#valorInicial").value);
    let inpIteraciones = document.querySelector("#iteraciones").value;
    if (inpIteraciones !== '') {
      iteraciones = Number(inpIteraciones);
    }
    let xnNew = valorInicial;
    let xnOld = 0;

    for (let i = 1; i <= iteraciones; i++ ){
      xnOld = xnNew;
      xnNew = iterationNewtonRapson(xnNew);
      let errorRP = Math.abs(((( xnNew - xnOld ) / xnNew) * 100).toFixed(2));
      updateTable(i, xnNew, errorRP);
      if (iteraciones === 1000 && errorRP < 1) {
        break;
      }
    }
    console.log('aproximacion: ' + xnNew);
    graficar();
  }else{
    window.Swal.fire({
      type:'error',
      title:'Error',
      text:'llene los campos necesarios'})
  }
}

function updateTable (iteration, aproximation, error) {
  var row = tabla.insertRow(-1);
  var cellIteration = row.insertCell(0);
  var cellAprox = row.insertCell(1);
  var cellError = row.insertCell(2);

  cellIteration.innerHTML = iteration;
  cellAprox.innerHTML = aproximation;
  cellError.innerHTML = error;
}

function graficar () {
  chart.drawGraphic(16, 12);
}


//cambiar esta a la de la funcion2
function resolveFunction (x) {
  let f = (x*x*x)-(x+1);
  return f;
}
//y esta tambien
function iterationNewtonRapson(valorInicial) {
  let f = (valorInicial*valorInicial*valorInicial)+(valorInicial*valorInicial)-(3*valorInicial)-3;
  let fi = (3*(valorInicial*valorInicial))-1;
  let rFull = f / fi;
  let rFixed = (valorInicial - rFull).toFixed(6);
  return rFixed;
}
