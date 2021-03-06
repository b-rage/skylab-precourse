/*Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.*/

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]
//console.log(flights[0].to) //output: New York

function skyAir() {

    function welcome() {

        var myName = prompt('escribe tu nombre');
        console.log('Hola ' + myName + ' Bienvenido!!');

    }
    welcome();

    function totalFlight() {
        var a;
        flights.forEach(function(ob) {
            if(!ob.scale) {
                a = 'no realiza ninguna escala.';
            }else{
                a = 'realiza escala.';
            }
            console.log('El vuelo con origen: ' + ob.to + ', y destino ' + ob.from + ' tiene un coste de ' + ob.cost + ' € y ' + a);
        })
    }
    totalFlight();

    function averageCost() {
        var acc = 0;
        flights.forEach(function(obj) {
            acc += obj.cost;
        })
        var averageCost = acc / flights.length;
        console.log('El coste medio del los vuelos es: ' + averageCost + ' €');
    }
    averageCost()

    function flightScale() {
        var count = 0;
        flights.forEach(function(o) {
           
            if(o.scale) {
                count += 1;
            }
        })
        console.log('Hay ' + count + ' vuelos que realizan escalas');
    }
    flightScale()

    function las5flights() {
        for(var j=0; j<flights.length/2; j++) {
            console.log(flights[j].from);
            } 
     
    }
    console.log('Los ultimos 5 vuelos de hoy son: ');
    
    las5flights()
}

skyAir();