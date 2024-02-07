// Función que determina si un núero es primo
function EsPrimo(num){
    let esPrimo = true;
    for (let i=2;i<=Math.sqrt(num) && esPrimo; i++){
        if (num%i == 0){
            esPrimo = false;
        }
    }
    return esPrimo;
}

// Función que devuelve la resta entre dos números (el mayor menos el menor)
function Resta(a,b){
    return a > b ? a - b : b - a;
}