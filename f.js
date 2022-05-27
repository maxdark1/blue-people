
arreglo = [4, 5, 2, 4, 5, 9, 9, 4, 4];

contiene = (array, numero, repeticiones) => {
    const result = array.filter(number => number === numero);
    return result.length >= repeticiones ? true : false;
}

console.log(contiene(arreglo, 4, 5)) // Regresa false;
console.log(contiene(arreglo, 4, 4)) // Regresa true;
console.log(contiene(arreglo, 4, 3)) // Regresa true;
console.log(contiene(arreglo, 9, 2)) // Regresa true;

