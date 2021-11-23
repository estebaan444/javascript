function Vocales(s = 'hola que tal com estas?') {
    var vocales = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s[i];

        if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
            vocales++;
        }

    }
    console.log(vocales);
}

Vocales();

// function vocal(str){
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }
// const string = 'hola que tal bon dia senyor'
// const resultat = vocal(string)
// console.log(resultat)

