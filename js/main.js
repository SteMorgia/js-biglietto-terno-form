let nome = document.getElementById('nome');
let kilometri = document.getElementById('kilometri');
let tariffa = 0.21;
let prezzo = kilometri * tariffa;
let eta = document.getElementById('eta')
if (eta == 'Minorenne') {
    let sconto = prezzo * 20 / 100;
    
}