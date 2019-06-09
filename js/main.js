    

var btnUno = document.querySelector("#btnUno");
btnUno.addEventListener("click", calcular);

var tabla = document.querySelector("#tabla");


function calcular(){
    tabla.innerHTML = "";
    let form = document.querySelector("#form");

    if(form.checkValidity()===true){
    let valorInicial = Number(document.querySelector("#valorInicial").value);
    var iteraciones = Number(document.querySelector("#iteraciones").value);


    //Resultados de la ecuación f(x)
    let i11 = (valorInicial*valorInicial*valorInicial)+(valorInicial*valorInicial)-(3*valorInicial)-3;
    let i12 = (3*(valorInicial*valorInicial)) + (2*valorInicial) - 3;
    let i13 = i11/i12;
    let i1final = (valorInicial - i13).toFixed(6);

    //Resultados de la ecuación f(x) de la iteración 2
    let i21 = (i1final*i1final*i1final) + (i1final*i1final) - (3*i1final) - 3;
    let i22 = (3*(i1final*i1final)) + (2*i1final) - 3;
    let i23 = i21/i22;
    let i2final = (i1final - i23).toFixed(6);
    let i2Porcentaje = Math.abs(((i2final-i1final)/i2final)*100);

    //Resultados de la ecuación f(x) de la iteración 3
    let i31 = (i2final*i2final*i2final) + (i2final*i2final) - (3*i2final) - 3;
    let i32 = (3*(i2final*i2final)) + (2*i2final) - 3;
    let i33 = i31/i32;
    let i3final = (i2final - i33).toFixed(6);
    let i3Porcentaje = Math.abs(((i3final-i2final)/i3final)*100);

    //Resultados de la ecuación f(x) de la iteración 4
    let i41 = (i3final*i3final*i3final) + (i3final*i3final) - (3*i3final) - 3;
    let i42 = (3*(i3final*i3final)) + (2*i3final) - 3;
    let i43 = i41/i42;
    let i4final = (i3final - i43).toFixed(6);
    let i4Porcentaje = Math.abs(((i4final-i3final)/i4final)*100);

    //Resultados de la ecuación f(x) de la iteración 5
    let i51 = (i4final*i4final*i4final) + (i4final*i4final) - (3*i4final) - 3;
    let i52 = (3*(i4final*i4final)) + (2*i4final) - 3;
    let i53 = i51/i52;
    let i5final = (i4final - i53).toFixed(6);
    let i5Porcentaje = Math.abs(((i5final-i4final)/i5final)*100);

    //Resultados de la ecuación f(x) de la iteración 6
    let i61 = (i5final*i5final*i5final) + (i5final*i5final) - (3*i5final) - 3;
    let i62 = (3*(i5final*i5final)) + (2*i5final) - 3;
    let i63 = i61/i62;
    let i6final = (i5final - i63).toFixed(6);
    let i6Porcentaje = Math.abs(((i6final-i5final)/i6final)*100);

    //Resultados de la ecuación f(x) de la iteración 7
    let i71 = (i6final*i6final*i6final) + (i6final*i6final) - (3*i6final) - 3;
    let i72 = (3*(i6final*i6final)) + (2*i6final) - 3;
    let i73 = i71/i72;
    let i7final = (i6final - i73).toFixed(6);
    let i7Porcentaje = Math.abs(((i7final-i6final)/i7final)*100);

    //Resultados de la ecuación f(x) de la iteración 8
    let i81 = (i7final*i7final*i7final) + (i7final*i7final) - (3*i7final) - 3;
    let i82 = (3*(i7final*i7final)) + (2*i7final) - 3;
    let i83 = i81/i82;
    let i8final = (i7final - i83).toFixed(6);
    let i8Porcentaje = Math.abs(((i8final-i7final)/i8final)*100);

    




    
    var row = tabla.insertRow(-1);
    var cell11 = row.insertCell(0);
    var cell12 = row.insertCell(1);
    var cell13 = row.insertCell(2);
    
    //imprime 1 iteración

    if(iteraciones==1){
    
    cell11.innerHTML = 1;
    cell12.innerHTML = i1final;
    cell13.innerHTML = "";

    }

   //imprime iteración 2

    else if(iteraciones==2){
    
    cell11.innerHTML = 2;
    cell12.innerHTML = i2final;
    cell13.innerHTML = i2Porcentaje.toFixed(6) + '%';
    }
    

    //imprime la iteración 3
    

    else if(iteraciones==3){
        
        cell11.innerHTML = 3;
        cell12.innerHTML = i3final;
        cell13.innerHTML = i3Porcentaje.toFixed(6) + '%';

        }


    //imprime la iteración 4
    else if(iteraciones==4){

        cell11.innerHTML = 4;
        cell12.innerHTML = i4final;
        cell13.innerHTML = i4Porcentaje.toFixed(6) + '%';
        }

    //imprime la iteración 5
    else if(iteraciones==5){
        
        cell11.innerHTML = 5;
        cell12.innerHTML = i5final;
        cell13.innerHTML = i5Porcentaje.toFixed(6) + '%';

        }
    

    //imprime la iteración 6

    else if(iteraciones==6){

        cell11.innerHTML = 6
        cell12.innerHTML = i6final;
        cell13.innerHTML = i6Porcentaje.toFixed(6) + '%';

        }
  

    //imprime la iteración 7

    else if(iteraciones==7){

        cell11.innerHTML = 7;
        cell12.innerHTML = i7final;
        cell13.innerHTML = i7Porcentaje.toFixed(6) + '%';

        }

            //imprime la iteración 8

    else if(iteraciones==8){

        cell11.innerHTML = 8;
        cell12.innerHTML = i8final;
        cell13.innerHTML = i8Porcentaje.toFixed(6) + '%';
    
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

        cell11.innerHTML = 8;
        cell12.innerHTML = i8final;
        cell13.innerHTML = i8Porcentaje.toFixed(6) + '%';

        cell21.innerHTML = 7;
        cell22.innerHTML = i7final;
        cell23.innerHTML = i7Porcentaje.toFixed(6) + '%';
    
        cell31.innerHTML = 6;
        cell32.innerHTML = i6final;
        cell33.innerHTML = i6Porcentaje.toFixed(6) + '%';

        cell41.innerHTML = 5;
        cell42.innerHTML = i5final;
        cell43.innerHTML = i5Porcentaje.toFixed(6) + '%';

        cell51.innerHTML = 4;
        cell52.innerHTML = i4final;
        cell53.innerHTML = i4Porcentaje.toFixed(6) +'%';

        cell61.innerHTML = 3;
        cell62.innerHTML = i3final;
        cell63.innerHTML = i3Porcentaje.toFixed(6) + '%';

        cell71.innerHTML = 2;
        cell72.innerHTML = i2final;
        cell73.innerHTML = i2Porcentaje.toFixed(6) + '%';

        cell81.innerHTML = 1;
        cell82.innerHTML = i1final;
        cell83.innerHTML = "";

        }
        else{
            Swal.fire({
                type:"error",
                title:"Iteración Inválida",
                text: "Sólo iteraciones del 1 al 8",
            })
        }
        
    }else{
        Swal.fire({
            type:"error",
            title:"Error",
            text: "Elige un valor inicial",
        })
    }
    form.classList.add("was-validated");
    
}


