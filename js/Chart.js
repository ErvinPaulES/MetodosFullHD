// para graficar lo unico que hay que hacer es crear una instancia y pasarle el canvas por paramentro seguido de la
//funcion de F(x) despues solo llamar al metodo drawGraphic(numX, numY), donde numX es el numero de columnas del eje x
//siendo mitad positivas y mitad negativas y numY las filas repartidas igualmente. 
//Nota: si no se asignan valores a la funcion por defecto tomara 8 columnas y 6 filas.


class Chart {
  constructor(canvas, functionEval) {
    this._canvas = canvas.getContext('2d');
    this._canvasDimensions = {wd: canvas.width, ht: canvas.height}
    this._getFxWithX = functionEval;
  }

  drawGraphic = (numX=8, numY=6) => {
    this.drawCartesianPlane(numX, numY)
    this.drawGraphicFill(numX, numY);
  }

  drawGraphicFill = (numX, numY) => {
    this._canvas.beginPath();
    this._canvas.moveTo(0, this._canvasDimensions.height/2);
    for (let x = -(numX/2); x < (numX/2); x += (3/(this._cuadrante.width/2)) ) {
       let cX = (x + (numX/2)) * this._cuadrante.width;
       let y = this._getFxWithX(x);
       let cY = 900 - ((y + (numY/2)) * this._cuadrante.width);
       console.log(y);
       this._canvas.lineTo(cX, cY);
    }
    this._canvas.strokeStyle = '#aa0000';
    this._canvas.lineTo(this._canvasDimensions.width, this._canvasDimensions.height/2);
    //this._canvas.closePath();
    this._canvas.fillStyle = 'rgba(0, 0, 180, 0.5)'
    //this._canvas.fill();
    this._canvas.stroke();
  }

  drawCartesianPlane = (width=8, height=6 ) => {
     this._cuadrante = {
      width: this._canvasDimensions.wd / width,
      height: this._canvasDimensions.ht / height
     };
     //console.log(cuadrante);
    this._canvas.beginPath();
    for (let i = 1; i < width+1; i++ ) {
       this._canvas.moveTo(i*this._cuadrante.width + 0.5, 0);
       this._canvas.lineTo(i*this._cuadrante.width + 0.5, this._canvasDimensions.ht);
       this._canvas.font = '18px serif';
       this._canvas.fillText((i - width/2).toString(), i*this._cuadrante.width + 1.5, this._canvasDimensions.ht/2 - 1.5 );
    }
    for (let i = 1; i <= height+1; i++ ) {
       this._canvas.moveTo(0, i*this._cuadrante.height + 0.5);
       this._canvas.lineTo(this._canvasDimensions.wd, i*this._cuadrante.height + 0.5);
       this._canvas.font = '18px serif';
       this._canvas.fillText((height/2 - i).toString(), this._canvasDimensions.wd / 2 + 1.5, i*this._cuadrante.height - 1.5 );
    }
    this._canvas.strokeStyle = '#cccccc';
    this._canvas.stroke();

    this._canvas.beginPath();
    this._canvas.moveTo((width/2)*this._cuadrante.width + 0.5, 0);
    this._canvas.lineTo((width/2)*this._cuadrante.width + 0.5, this._canvasDimensions.ht);
    this._canvas.moveTo(0, (height/2)*this._cuadrante.height + 0.5);
    this._canvas.lineTo(this._canvasDimensions.wd, (height/2)*this._cuadrante.height + 0.5);
    this._canvas.strokeStyle = '#444444';
    this._canvas.stroke();
    console.log(this._canvas);
  }
}

export default Chart;
