console.log("Mira mamá funciona");

let nombre = "Daniel";

// Comparación de caracteres.
let resultado = nombre > "Andy";
console.log(resultado);

console.log("-----");
// Operadores logicos: 
// !: not.
// || : or.
// &&: and.

// booleanos:
// 1: true.
// 0: false.
console.log(!0); // True.
console.log(!1); // False.
console.log(!2); // False.
console.log(true && true); // True.
console.log(true && false); // False.
console.log(true || false); // True.

console.log("-----");

// Comparación de null & undefined.
// == : comparación de valores.
// === : comparación de bits.
console.log(null == undefined); // True.
console.log(null === undefined); // False.

console.log("-----");
// Condicionales.
// TIP: Uso de llaves para condicionales multilineas.

let edad = 30;

if (edad > 10) {
    console.log("mayor");
}
else if (edad < 10) {
    console.log("menor");
}
else if (edad === 10) {
    console.log("igual");
}
else {
    console.log("Indeterminado");
}

// Ciclos.
// For, while.
for (let i = 1; i<=10; i++){
    console.log(i);
}

let count = 1;
while(count <= 10){
    console.log(count);
    count++;
};