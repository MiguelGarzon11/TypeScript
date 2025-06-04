// Non-null Assertion 
// Le dice a TypeScript que una expresión no es null ni undefined.

function getElement() {
    return document.getElementById("input");
}

const input = getElement()!;
input.innerHTML = "Hola";

// Solo úsalo cuando estés seguro de que el valor nunca será null/undefined
