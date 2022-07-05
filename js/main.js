

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
        let biglietto;
        let numeroCarrozza = Math.floor(Math.random() * 10) + 1;
        let numeroCodice = Math.floor(Math.random() * 9999) + 90000;
        if (eta == 'minorenne') {
            let sconto = prezzo * 20 / 100;
            prezzo = prezzo - sconto;
            biglietto = 'Biglietto Minorenne';
        } else if (eta == 'over65') {
            let sconto = prezzo * 40 / 100;
            prezzo = prezzo - sconto;
            biglietto = 'Biglietto silver';
        } else {
            biglietto = 'Biglietto standard';
        }
        document.getElementById('container').className = 'show';
        const passeggero = document.getElementById('passeggero');
        passeggero.innerHTML = nome;
        const offerta = document.getElementById('offerta');
        offerta.innerHTML = biglietto;
        const carrozza = document.getElementById('carrozza');
        carrozza.innerHTML = numeroCarrozza;
        const codice = document.getElementById('codice');
        codice.innerHTML = numeroCodice;
        const costo = document.getElementById('costo');
        costo.innerHTML = prezzo;
    }
)