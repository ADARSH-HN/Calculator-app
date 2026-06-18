export function add(a,b){
    return a+b;
}

export function subtract(a,b){
    return a-b;
}

export function multiply(a,b){
    return a*b;
}

export function divide(a,b){
    return b === 0 ? "undefined":a/b;
}

export function percentage(a,b){
    return b === 0 ? "undefined":(a/b)*100;
}

