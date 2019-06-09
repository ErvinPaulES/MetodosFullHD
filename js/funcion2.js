var btnDos = document.querySelector("#btnDos");
btnDos.addEventListener("click", calcular);

var tabla = document.querySelector("#tabla");


function calcular (){
    tabla.innerHTML = "";
    let form = document.querySelector("#form");

    if(form.checkValidity()===true){
    let valorInicial = Number(document.querySelector("#valorInicial").value);
    var iteraciones = Number(document.querySelector("#iteraciones").value);

    //Resultados de la ecuación f(x);
    var i11 = (valorInicial*valorInicial*valorInicial) - valorInicial + 1;
    var i12 = (3*(valorInicial * valorInicial)) - 1;
    var i13 = i11/i12;
    var i1Final = (valorInicial - i13).toFixed(6);
    //iteración 2
    var i21 = (i1Final*i1Final*i1Final) - i1Final + 1;
    var i22 = (3*(i1Final * i1Final)) - 1;
    var i23 = i21/i22;
    var i2Final = (i1Final - i23).toFixed(6);
    var i2Porcentaje = Math.abs(((i2Final - i1Final)/i2Final)*100);

    //Iteración 3
    var i31 = (i2Final*i2Final*i2Final) - i2Final + 1;
    var i32 = (3*(i2Final * i2Final)) - 1;
    var i33 = i31/i32;
    var i3Final = (i2Final - i33).toFixed(6);
    var i3Porcentaje = Math.abs(((i3Final - i2Final)/i3Final)*100);

    //Iteración 4
    var i41 = (i3Final*i3Final*i3Final) - i3Final + 1;
    var i42 = (3*(i3Final * i3Final)) - 1;
    var i43 = (i41/i42).toFixed(6);
    var i4Final = i3Final - i43;
    var i4Porcentaje = Math.abs(((i4Final - i3Final)/i4Final)*100);

    //Iteración 5
    var i51 = (i4Final*i4Final*i4Final) - i4Final + 1;
    var i52 = (3*(i4Final * i4Final)) - 1;
    var i53 = i51/i52;
    var i5Final = (i4Final - i53).toFixed(6);
    var i5Porcentaje = Math.abs(((i5Final - i4Final)/i5Final)*100);

    //Iteración 6
    var i61 = (i5Final*i5Final*i5Final) - i5Final + 1;
    var i62 = (3*(i5Final * i5Final)) - 1;
    var i63 = i61/i62;
    var i6Final = (i5Final - i63).toFixed(6);
    var i6Porcentaje = Math.abs(((i6Final - i5Final)/i6Final)*100);

    //Iteración 7
    var i71 = (i6Final*i6Final*i6Final) - i6Final + 1;
    var i72 = (3*(i6Final * i6Final)) - 1;
    var i73 = i71/i72;
    var i7Final = (i6Final - i73).toFixed(6);
    var i7Porcentaje = Math.abs(((i7Final - i6Final)/i7Final)*100);

    //Iteración 8
    var i81 = (i7Final*i7Final*i7Final) - i7Final + 1;
    var i82 = (3*(i7Final * i7Final)) - 1;
    var i83 = i81/i82;
    var i8Final = (i7Final - i83).toFixed(6);
    var i8Porcentaje = Math.abs(((i8Final - i7Final)/i8Final)*100);

    var row = tabla.insertRow(-1);
    var cell11 = row.insertCell(0);
    var cell12 = row.insertCell(1);
    var cell13 = row.insertCell(2);


    if(iteraciones==1){
        cell11.innerHTML = iteraciones; 
        cell12.innerHTML =  i1Final;
        cell13.innerHTML =  "";
    }

    else if(iteraciones==2){
        cell11.innerHTML = iteraciones; 
        cell12.innerHTML =  i2Final;
        cell13.innerHTML =  i2Porcentaje.toFixed(6) + "%";
    }


    else if(iteraciones==3){
        cell11.innerHTML = iteraciones; 
        cell12.innerHTML =  i3Final;
        cell13.innerHTML =  i3Porcentaje.toFixed(6) + "%";
    }


    else if(iteraciones==4){
        cell11.innerHTML = iteraciones; 
        cell12.innerHTML =  i4Final;
        cell13.innerHTML =  i4Porcentaje.toFixed(6) + "%";
    }

    else if(iteraciones==5){
        cell11.innerHTML = iteraciones; 
        cell12.innerHTML =  i5Final;
        cell13.innerHTML =  i5Porcentaje.toFixed(6) + "%";
    }

    else if(iteraciones==6){
        cell11.innerHTML = iteraciones; 
        cell12.innerHTML =  i6Final;
        cell13.innerHTML =  i6Porcentaje.toFixed(6) + "%";
    }


    else if(iteraciones==7){
        cell11.innerHTML = iteraciones; 
        cell12.innerHTML =  i7Final;
        cell13.innerHTML =  i7Porcentaje.toFixed(6) + "%";
    }


    else if(iteraciones==8){
        cell11.innerHTML = iteraciones; 
        cell12.innerHTML =  i8Final;
        cell13.innerHTML =  i8Porcentaje.toFixed(6) + "%";
    }

    else if(iteraciones==0){
    var row2 = tabla.insertRow(0);
    var cell21 = row2.insertCell(0);
    var cell22 = row2.insertCell(1);
    var cell23 = row2.insertCell(2);

    var row3 = tabla.insertRow(0);
    var cell31 = row3.insertCell(0);
    var cell32 = row3.insertCell(1);
    var cell33 = row3.insertCell(2);

    var row4 = tabla.insertRow(0);
    var cell41 = row4.insertCell(0);
    var cell42 = row4.insertCell(1);
    var cell43 = row4.insertCell(2);

    var row5 = tabla.insertRow(0);
    var cell51 = row5.insertCell(0);
    var cell52 = row5.insertCell(1);
    var cell53 = row5.insertCell(2);

    var row6 = tabla.insertRow(0);
    var cell61 = row6.insertCell(0);
    var cell62 = row6.insertCell(1);
    var cell63 = row6.insertCell(2);

    var row7 = tabla.insertRow(0);
    var cell71 = row7.insertCell(0);
    var cell72 = row7.insertCell(1);
    var cell73 = row7.insertCell(2);

    var row8 = tabla.insertRow(0);
    var cell81 = row8.insertCell(0);
    var cell82 = row8.insertCell(1);
    var cell83 = row8.insertCell(2);

    cell11.innerHTML = 9;
    cell12.innerHTML = i8Final;
    cell13.innerHTML = i8Porcentaje.toFixed(6) + '%';

    cell21.innerHTML = 7;
    cell22.innerHTML = i7Final
    cell23.innerHTML = i7Porcentaje.toFixed(6) + '%';

    cell31.innerHTML = 6;
    cell32.innerHTML = i6Final;
    cell33.innerHTML = i6Porcentaje.toFixed(6) + '%';

    cell41.innerHTML = 5;
    cell42.innerHTML = i5Final;
    cell43.innerHTML = i5Porcentaje.toFixed(6) + '%';

    cell51.innerHTML = 4;
    cell52.innerHTML = i4Final;
    cell53.innerHTML = i4Porcentaje.toFixed(6) +'%';

    cell61.innerHTML = 3;
    cell62.innerHTML = i3Final
    cell63.innerHTML = i3Porcentaje.toFixed(6) + '%';

    cell71.innerHTML = 2;
    cell72.innerHTML = i3Final;
    cell73.innerHTML = i2Porcentaje.toFixed(6) + '%';

    cell81.innerHTML = 1;
    cell82.innerHTML = i1Final;
    cell83.innerHTML = "";
    }

    else{
        Swal.fire({
            type:"error",
            title:"Iteración Inválida",
            text: "Sólo iteraciones del 1 al 8",
        })
    }


    }
    else{
        Swal.fire({
            type:"error",
            title:"Error",
            text: "Elige un valor inicial",
        })
    }
    form.classList.add("was-validated");
}