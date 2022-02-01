let array = [5,6,7,8,9];
let array1 = [6,7,3,4,2];
let array2 = array.concat(array1);
let noDuplicate = [];

document.write(array2)

for(var i = 0; i<array2.length; i++){
  let duplicate = array2[i];
  if(!noDuplicate.includes(array2[i])){
      noDuplicate.push(duplicate)
  }
}
document.write(noDuplicate)