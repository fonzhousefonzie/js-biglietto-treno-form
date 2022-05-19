document.getElementById('genera').addEventListener('click', function(){
    const nome = document.getElementById('name').value;
    const km = document.getElementById('km').value;
    const eta = document.getElementById('eta').value;
    let price = (km * 0.21);
    if(isNaN(nome) && (km > 10)){
        document.getElementById('ticket').classList.remove('d-none');
        document.getElementById('ticketName').innerHTML= nome;
        document.getElementById('carrozza').innerHTML= Math.floor(Math.random() * 20) + 1;
        document.getElementById('codice').innerHTML= Math.floor(Math.random() * 100000);
    } else {
        alert('Valori inseriti non validi!');
        document.querySelector('form').reset();
    }

    if(eta === 'min'){
        document.getElementById('nomeOfferta').innerHTML= 'Sconto minorenni';
        document.getElementById('prezzo').innerHTML= (price * 0.8).toFixed(2) ;
    } else if (eta === 'over'){
        document.getElementById('nomeOfferta').innerHTML= `Sconto Over 65`;
        document.getElementById('prezzo').innerHTML= (price * 0.6).toFixed(2) ;
    } else {
        document.getElementById('nomeOfferta').innerHTML= `Biglietto Standard`;
        document.getElementById('prezzo').innerHTML= price.toFixed(2) ;
    }
});

document.getElementById('annulla').addEventListener('click', function(){
    document.getElementById('ticket').classList.add('d-none');
    document.querySelector('form').reset();
});