function piramide(pisos) {
    for (let i = 0; i < pisos; i++) {
        let piso = '';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        console.log(piso)
    }
}

piramide(5);