const imprimirResultado = function(nota){
switch (Math.floor(nota)){
    case 10:
        case 9:
            console.log('Quadro de honra')
            break;
            case 8:
            case 7: 
                console.log('Aprovado')
                break
            case 6: 
            case 5:
            case 4:
                console.log('recuperação')
                break
            case 3:
            case 2:
            case 1:
            case 0:
                console.log('reprovado')
                break
            default: 
            console.log('invalido')
}


}
imprimirResultado(9);
imprimirResultado(0);
imprimirResultado(10);
imprimirResultado(7);
imprimirResultado(3);
imprimirResultado(6);
imprimirResultado(5);