var array = [5,7,2,8,12,57];
var cub = array.map(function(x){
  return  Math.pow(x,3);
});

document.write("Array inici: " + array);
document.write("Elevat al cub: " + cub)