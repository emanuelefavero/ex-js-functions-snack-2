# EX - Snack Funzioni

Esercizi di funzioni avanzate in JavaScript, dal mio corso web dev (specializzazione Frontend)

## Avvio

Con Node.js e npm installati, dalla cartella del progetto:

```bash
npm run dev
```

Lo script esegue [soluzioni.js](soluzioni.js), dove sono presenti le soluzioni agli esercizi.

## Esercizi

- **Somma:** creare `somma` in tre forme: funzione dichiarativa, funzione anonima assegnata a una variabile e arrow function. Accetta due numeri e restituisce la somma.
- **Quadrato:** creare l'arrow function `quadrato`, che restituisce il quadrato di un numero in una sola riga.
- **Callback:** creare `eseguiOperazione`, che accetta due numeri e una funzione operatore ed esegue l'operazione sui numeri ricevuti.
- **Timer:** creare `creaTimer`, che accetta un tempo in millisecondi e restituisce una funzione che avvia un `setTimeout` per stampare `"Tempo scaduto!"`.
- **Messaggio periodico:** creare `stampaOgniSecondo`, che accetta un messaggio e lo stampa ogni secondo con `setInterval`. Interrompere manualmente o con `clearInterval()`.
- **Contatore automatico:** creare `creaContatoreAutomatico`, che accetta un intervallo e restituisce una funzione che avvia un `setInterval`, incrementando e stampando un contatore.
- **Avvio e stop:** creare `eseguiEferma`, che accetta un messaggio, un tempo di avvio e un tempo di stop. Stampa il messaggio a intervalli regolari e si ferma dopo il tempo di stop.

## Bonus

- **Conto alla rovescia:** creare `contoAllaRovescia(n)`, che conta da `n` a 0 a intervalli di un secondo. Al termine stampa `"Tempo scaduto!"` e interrompe il timer.
- **Sequenza di operazioni:** creare `sequenzaOperazioni`, che accetta un array di funzioni e un intervallo ed esegue le operazioni in sequenza con il ritardo indicato.
- **Throttler:** creare `creaThrottler`, che accetta una funzione e un tempo limite in millisecondi e restituisce una funzione che esegue l'operazione originale al massimo una volta per intervallo.
