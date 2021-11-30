function piramide(pisos) {
    for (let i = 0; i < pisos; i++) {
        let piso = '';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        if(i%2==0){
        console.log(piso) 
        }
        //No ho he sapigut fer amb continue
    }
}

piramide(5);