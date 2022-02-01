var arrayString = ["Esteban", "Arquillo", "Marc", "Joan"];
var arrayA = [];
var contador = 0;
var contadorA = 0;

for (let i = 0; i < arrayString.length; i++) {
  for (let j = 0; j < arrayString[i].length; j++) {
    if (arrayString[i][j] = 'a') {
      contador++;
      if (contador == 2) {
        arrayA[contadorA] = arrayString[i];
        contadorA++;
      }
    }
  }

  contador = 0;
}
document.write("Strings:" + arrayString +"<br>");
document.write("Amb vocals A:" + arrayA);

