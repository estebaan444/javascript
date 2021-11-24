function fNom(fecha = new Date()){
    console.log(fecha)
}

function suma(a,b,c = 4){
    return a+b+c;

}

function ex7(a,b,c){
    fNom();
    return suma(a,b,c)
}

console.log(ex7(2,30,4));

 
