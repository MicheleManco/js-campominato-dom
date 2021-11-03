// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente 
// il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

//faccio dire all'utente un numero da uno a tre (sarà il livello di difficoltà del gioco)
    //se mi dice 1 faccio partire il rimepimento del gioco con la prima difficoltà, se mi dice 2 ... ,se mi dice 3... => un if con tre condizioni con dentro un for con un <di tot in base alla difficoltà,con dentro i div con relative classi
//quando l'utente clicca su una casella gli faccio capire che è cliccata tramite un cambiamento di classe addEventListener(click,)

// done=> // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// done=> // I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su ogni cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
    // se il numero che compare è uguale a un numero incluso  nell'array si ferma il gioco e cambiano di colore tutti i numeri dell'array
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito. 
// (quindi se ci pensate dovrete tenere traccia del punteggio).


let livelloScelto = prompt("scegli il livello di difficoltà tra 1 e 3");
let creazione = document.getElementById("contenitore");
let numeriRandom = [];

while ((livelloScelto !== "1") && (livelloScelto !== "2") && (livelloScelto !== "3")){
 livelloScelto = prompt("scegli un numero da 1 e 3 ")
}


if (livelloScelto === "1"){
    generateGrid(100, "square");
    //genero 16 numeri random non doppioni
    generatoreNumRandom(100);
} else if(livelloScelto === "2"){
    generateGrid(81, "square2");
    generatoreNumRandom(81);
} else { 
    generateGrid(49, "square3");
    generatoreNumRandom(49);
}
console.log(numeriRandom);








//funzione che mi genera la griglia in base a che classe scelgo
function generateGrid(levels, baseClass) {
    for (let i = 1; i <= levels; i++){ 
        let box = document.createElement('div');
        box.classList.add(baseClass);
        box.addEventListener("click", 
            function() {
                box.innerText = i;
                box.classList.add("colore");
                console.log('click');
                let copia = numeriRandom.includes(i)
                if(copia == true){
                    box.classList.add("bomba")
                }
        });
        creazione.appendChild(box);
    }
}
//funzione che genera 16 numeri con argomento totale di numeri casuali tra cui scegliere
function generatoreNumRandom(tot){
    while (numeriRandom.length < 16){
        let numbers = Math.floor(Math.random()*tot +1);
        let doppio = numeriRandom.includes(numbers);
        if (doppio == false){
            numeriRandom.push(numbers)
        }
    }
}
