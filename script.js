console.log('Hello World!');

// dichiarazione variabile costante
const myVariable1 = 'Hello';
// console.log(myVariable1);
// myVariable1 = 'Bye'; Questo assegnamento non posso farlo per la varibaile definitia const
// console.log(myVariable1);

// dichiarazione variabile riassegnabile
let myVariable2;
myVariable2 = 'Hello';
console.log(myVariable2);
myVariable2 = 'Bye Bye';
console.log(myVariable2);

function saluto() {
    console.log("Hello");
}

saluto();

function sommaNumeri(num1, num2) {
    const risultato = num1 + num2;
    console.log("Questo è il risultato della somma subito appena effettuata l'operazione:", risultato)
    return risultato;
}

sommaNumeri(1, 5);

let somma = sommaNumeri(3, 5);
console.log(somma);

// Istruzioni condizionali -> Eseguire porzione di codice solo se si verifica una determinata condizione

const x = 6;
if (x == 3) {
    console.log("x contiene 3");
}

else {
    console.log("x non contine 3");
}


// && operatore logico AND
// || operatore logico OR
// ! operatore unario NOT

const element1 = document.getElementById('ciao');
console.log(element1);
console.log(element1.innerText);

const input1 = document.getElementById('input1');
console.log(input1);
console.log(input1.value);

element1.style.color = "red";
element1.style.color = "black";

// Listener: funzioni che restano in ascolto e si attivano non appena accade un determinato evento

const button1 = document.getElementById("button1");
button1.addEventListener('click', function(){
    console.log("Ehi mi hai cliccato!");
});

