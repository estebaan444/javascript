let array = [5, 6, 1, 2, 3, 4, 9, 7, 8, 10];
let par = [];
let impar = [];
for (let i = 0; i < array.length; i++) {
  if (i % 2 == 0) {
    par.push(array[i]);
  }
  else {
    impar.push(array[i]);
  }
}

console.log("Numeros parells: " + par);
console.log("Numeros imparells: " + impar);
