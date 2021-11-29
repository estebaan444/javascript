var qualificacio = 1;
switch (true) {
    case qualificacio>=0 && qualificacio<= 4.99:
        console.log('Insuficient');
    break;

    case qualificacio>=5 && qualificacio<= 5.99:
        console.log('Suficient');
    break;

    case qualificacio>=6 && qualificacio<= 6.99:
        console.log('Bé');
    break;

    case qualificacio>=7 && qualificacio<= 8.99:
        console.log('Notable');
    break;
        
    case qualificacio>=9 && qualificacio<= 10:
        console.log('Exelent');
    break;
}