var pos = (a, b) => {
    return (a.length - a.indexOf(b));
}
console.log(posicio('Es divendres', 'que tal'));

var dividir = (a, b) => {
    return b.substr(a, b.length);
}
console.log(dividir(posicio('Es divendres', 'que tal'), 'Hey'));