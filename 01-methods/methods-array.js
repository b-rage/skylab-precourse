//Arrays
//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

var n = ['GIANLUCA BRAGAGLIA'];
var myName = n[0][0] + '/' + n[0][1] + '/' + n[0][2] + '/' + n[0][3] + '/' + n[0][4] + '/' + n[0][5] + '/' + n[0][6] + '/' + n[0][7] + '/' + n[0][9] + '/' + n[0][10] + '/' + n[0][11] + '/' + n[0][12] + '/' + n[0][13] + '/' + n[0][14] + '/' + n[0][15] + '/' + n[0][16] + '/' + n[0][17];



console.log(myName) // T/O/N/Y/S/T/A/R/K

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
var myName = n[0][9] + '|' + n[0][10] + '|' + n[0][11] + '|' + n[0][12] + '|' + n[0][13] + '|' + n[0][14] + '|' + n[0][15] + '|' + n[0][16] + '|' + n[0][17];
console.log(myName) // S|T|A|R|K

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

for (var i = 0; i < 8; i++) {
    console.log(i + 1 + 'º' + ' ' + n[0][i]);
}

// 1º T, 2º O, 3º N, 4º Y

//Resource: https://www.w3schools.com/jsref/jsref_split.asp

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

for (var i = 9; i <= 17; i++) {
    console.log(i + 'º' + ' ' + n[0][i]);
}
// 5º S, 6º T, 7º A, 8º R, 9º K
//Resource: https://www.w3schools.com/jsref/jsref_length_array.asp

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
var myInitials = n[0][0] + '.' + n[0][9];
console.log(myInitials) // T.S

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
var n2 = ['Gianluca', 'Bragaglia', 46];

console.log("My name is " + n2[0].toUpperCase() + " and i'm " + n2[2] + " years old") // My name is TONY and i'm 40 years old

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
function addCity(myCity) {
    n2.push(myCity);
    console.log('City added to array! => ' + n2);
}
addCity('Barcelona');
// City added to array! => Tony, Stark, 40, New York

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
function myCityDelete() {

    n2.splice(3, 1);
    console.log('City deleted! => ' + n2);

}
addCity() // City added to array! => Tony, Stark, 40, New York
myCityDelete() // City deleted! => Tony, Stark, 40


//j) Ahora, elimina el nombre y asegura los cambios Resources: https://www.w3schools.com/jsref/jsref_shift.asp

n2.shift();
console.log(n2);


//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición? Resources: https://www.w3schools.com/jsref/jsref_splice.asp
n2.splice(0, 0, ' Gianluca');
console.log(n2);


//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.


var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multByTwo = numbers.map(function (num) {
    return num * 2;
});
console.log(multByTwo);



//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

var num = 3; // cada número se multiplicará por 3
function multByNum() {
    var arrayMult = numbers.map(function (nums) {
        return nums * num;
    })
    console.log(arrayMult);
    function myFunction() {
        arrayMult.sort(function (a, b) { return b - a });
        console.log(arrayMult);
    }
    myFunction();

}
multByNum();



//Resource: https://www.w3schools.com/jsref/jsref_map.asp

//m) Podrías mostrarlos en el orden inverso? Resources: https://www.w3schools.com/jsref/jsref_sort.asp

function myFunction() {
    arrayMult.sort(function (a, b) { return b - a });

}



//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
var str = 'Tony Stark';
var letr = [];
for (var i = 0; i < str.length; i++) {
    letr.push(str[i].toUpperCase());  // array with letters of str uppercase
}



var letras = letr.slice().sort();
var results = [];
var rest = [];
for (var i = 0; i < letras.length - 1; i++) {  // find duplicate letters

    if (letras[i + 1] == letras[i]) {

        results.push(letras[i]);
        results.push(letras[i + 1]);

    }
}



console.log(str + ", the letter ' " + results[0] + " ' => " + (str.match(/t/gi).length) + " times");
// Tony Stark, the letter 'T' => 2 times.




//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

var letr2 = [];
for (var i = 0; i < str.length; i++) {
    letr2.push(str[i]);  // array with letters of str normal case
}

for (var e = 0; e < letr2.length; e++) {
    if (letr2[e] == results[0] || letr2[e] == results[0].toLowerCase() || letr2[e] == ' ') {
        letr2.splice(e, 1);
    }
}


console.log('Tony Stark, the letters => ' + letr2 + ' are not repeated, the name is => ' + str) // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark /**/