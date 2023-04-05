// variables

var a; // declarando
var b = 'b'; // Declaramos y Asignamos
b = 'bb'; // reAsignación
var a = 'aa'; // redeclaración

// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//otra forma de crear una variable global, pero no hacerlo 

function countries() {
    country = 'Colombia'; // se esta declarando esto como global por accidente
    console.log(country);
}
countries();
console.log(country);