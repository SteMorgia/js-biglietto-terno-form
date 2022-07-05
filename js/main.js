

const generaBiglietto = document.getElementById('generaBiglietto');
generaBiglietto.addEventListener('click',
    function() {
        let nome = document.getElementById('nome').value;
        console.log (nome);
        let kilometri = document.getElementById ('kilometri').value;
        console.log (kilometri);
        let tariffa = 0.21;
        let prezzo = kilometri * tariffa;
        console.log (prezzo);
        let eta = document.getElementById('eta').value;
        console.log (eta);
        if (eta == 'minorenne') {
            let sconto = prezzo * 20 / 100;
            prezzo = prezzo - sconto;
            let biglietto = 'Biglietto Minorenne';
        } else if (eta == 'over65') {
            let sconto = prezzo * 40 / 100;
            prezzo = prezzo - sconto;
            let biglietto = 'Biglietto silver';
        } else {
            let biglietto = 'Biglietto standard';
        }
        const passeggero = document.getElementById('passeggero');
        passeggero.innerHTML = nome;
        const offerta = document.getElementById('offerta');
        offerta.innerHTML = biglietto;
        const carrozza = 
    }
)