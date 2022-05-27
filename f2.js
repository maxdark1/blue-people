
console.log(mayorDiferencia( [ 1, 1, 4 ])) // 3
console.log(mayorDiferencia( [ 9, 8 ])) // 1
console.log(mayorDiferencia( [ 6, 22, 16, 29, 23 ])) // 23
console.log(mayorDiferencia( [ 28, 16, 28, 11, 14, 26, 23, 25, 17, 3, 22, 23, 23, 10 ])) // 25

function mayorDiferencia(arr) {
    var max = arr[0];
    var min = arr[0];
    max = min = arr[0];

    for (var i = 1;i < arr.length; i++) {
	let value = arr[i];
	min = (value < min) ? value : min
	max = (value > max) ? value : max
	var resta =  max - min;
    }
    return resta;
};