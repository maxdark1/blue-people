console.log(mismaDiferencia([ 1, 3, 5 ])); // true
console.log(mismaDiferencia([ 194, 54, 23, 7, 3, 6, 8 ])); // false
console.log(mismaDiferencia([44, 37, 30, 23 ])); // true
console.log(mismaDiferencia([ -2.3, -1.1, 0.1, 1.3, 2.5, 3.7 ])); // true
console.log(mismaDiferencia([ 1, 8 ])); // true
console.log(mismaDiferencia([ 3, 2, 1, 2, 3, 4, 3])); // true

function mismaDiferencia(arr){
    const ultimaPosicion = arr[(arr.length -1)];
    const penultimaPosicion = arr[(arr.length -2)];
    let diferencia = verificarMayor(ultimaPosicion,penultimaPosicion);

    if(arr.length < 2){
        return true;
    }

    for(let i = (arr.length -1); i >= 0; i-- ){
        if(i > 0){
            let sep = verificarMayor(arr[i],arr[i-1]);
            if(sep !== diferencia)
            return false; 
        } else {
            return true;
        }
    }
}

function verificarMayor(ultimaPosicion, penultimaPosicion){
    return ultimaPosicion > penultimaPosicion ? (penultimaPosicion - ultimaPosicion).toFixed(1) : (ultimaPosicion - penultimaPosicion).toFixed(1);
}