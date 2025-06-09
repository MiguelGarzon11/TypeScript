// Un type Guard es una forma de decirle a TypeScript:
// Confia en mi, si pasa esta condición, este valor es de este tipo.

// Es una herramienta para hacer Narrowing.


// typeof (Para tipos primitivos)

function print(valor: string | number) {
    if (typeof valor === "string") {
        console.log(valor.toUpperCase()); // string
    }
    else {
        console.log(valor.toFixed(2));
    }
}