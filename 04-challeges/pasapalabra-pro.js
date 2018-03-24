
/*
Pasapalabra Game! (Final JS) 
Resource: https://www.youtube.com/watch?v=xJp2c_rcHDc

Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el usuario deberá adivinar que palabra estamos tratando, por ejemplo:

'>>>'With the letter "M", Capital of Spain, located in the center of the country.
'>>>' "Madrid"
'>>>'Correct, you have 1 Point!
Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuantas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. El juego deberá, cuando finalize, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.

PRO

Los usuarios deberán tener tiempo límite por cada juego, por ejemplo 130 segundos... Resource: https://www.w3schools.com/jsref/met_win_settimeout.asp
El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" == "ANIMAL" // "Animal" // "aNiMal"...
El programa debe estar preparado para aceptar el input "END" para terminar el juego en cualquier momento, si esto sucede, el programa dirá cuantas letras ha acertado pero no entrará en el ranking.
Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, se podrían hacer tres preguntas diferentes.
Ejemplo de preguntas y respuestas: made by => www.github.com/misan7
*/

function pasapalabraPro() {

    
    var players = [];
    var playerName;
    var myTimeOut;
   

    



    function newGame() {

        playerName = document.getElementById('nome').innerHTML.value;
        var timer = setTimeout(ask, 6000);
       
    }

    newGame();
    
    

    function ask() {

        var questions = [
            { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
            { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
            { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
            { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
            { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
            { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
            { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
            { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
            { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
            { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
            { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
            { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
            { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
            { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
            { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
            { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
            { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
            { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
            { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
            { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
            { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
            { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
            { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
            { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
            { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
            { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
            { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
        ];

        //clearTimeout(timer);
        var corrects = [];
        var incorrects = 0;
        var points = 0;
        var count = 27;
   
        while(count > 0) {

            

            for(var i=0; i<questions.length; i++) {
                
                var timer3 = setTimeout(quesT, 5000);

                function quesT() {
                    var que = questions[i].question;
                    console.log(que);
                    window.document.getElementById("que").innerHTML = que;
                    var askFor = document.getElementById('queInput').innerHTML.value;
                    if(questions[i].status == 0 || questions[i].status == 3) {
                    
                        if(askFor == questions[i].answer) {
    
                            points++;
                            count--;
                            questions[i].status = 1;
                            corrects.push(questions[i].letter);
                            alert('Correct, you have ' + points + ' Point!');
    
                        }else if (askFor == 'pasapalabra') {
    
                            questions[i].status = 3;
                            alert('Pasapalabra');
                            
                        
                        }else if(askFor !== 'pasapalabra' || askFor !== questions[i].answer){
    
                            questions[i].status = 2;
                            incorrects++;
                            count--;
        
                        }
                    }
                }
                
                    
            
            }
        }

        var timer2 = setTimeout(resultT, 60000);
        function resultT() {
            players.push({name: playerName, points: points});
            console.log(players);
            
            console.log('Game Over!!' + playerName + ' has fallado ' + incorrects + ' letras, Has acertado esas letras: ' + corrects + ' tienes ' + points + ' puntos' );
            var newPlayer = prompt('otro jugador? Y/N');
            switch(newPlayer) {
                case 'y':
                    newGame();
                    break;
                case 'n':
                    ranking();
                    break;

            
            }
        }
    }


    function ranking() {

        var sort_by = function(field, reverse, primer){     //sort array object by

            var key = primer ? 
                function(x) {return primer(x[field])} : 
                function(x) {return x[field]};
         
            reverse = !reverse ? 1 : -1;
         
            return function (a, b) {
                return a = key(a), b = key(b), reverse * ((a < b) - (b < a));
              } 
         }

        var rankPoints = players.sort(sort_by('points', true, parseInt));   // Sort by price high to low
        var revRankPoints = rankPoints.reverse();
        revRankPoints.forEach(function(obj){

            console.log(obj.name + ' => ' + obj.points + ' puntos');
        }) 
            
            
       
    }


}

pasapalabraPro();