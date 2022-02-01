let array = Array.from({length: 5}, () => Math.floor(Math.random()*10));
  document.write(array)

let array1 = [33,79,56,12, ...array]
    document.write("<br><br>" + array1)