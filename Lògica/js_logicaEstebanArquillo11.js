function moviment(t) {
  const aux = t.split('');
  aux.push(aux.shift());
  return aux.join('');
}

let r = moviment('12345');
console.log(r);
console.log(moviment(r));