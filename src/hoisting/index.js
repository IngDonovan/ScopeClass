//el hoisting hace asignar el valor antes como undefined
// var nameOfDog;//undefined
// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';


//el hoisting lo eleva y queda de esta manera

var elmo;
function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}
nameOfDog();

var elmo = 'Elmito';


