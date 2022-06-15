
export function suma (a, b){
    return a + b;
}

export function multiplica (a, b){
    return a * b
}

export function eleva(a, b){
    return a ** b;
}

export function factorial (a){
    let factorial = 1;
    for (let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

export const nombre = "Agustin"
