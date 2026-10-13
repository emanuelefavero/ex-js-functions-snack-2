/** @fileoverview Soluzioni degli esercizi (snacks). */

console.log('De-commenta i test di questo file per verificare le soluzioni');

// SNACK 1
export function sommaDichiarativa(a, b) {
  return a + b;
}

export const sommaAnonima = function (a, b) {
  return a + b;
};

export const sommaArrow = (a, b) => a + b;

// console.log('sommaDichiarativa:', sommaDichiarativa(2, 3)); // 5
// console.log('sommaAnonima:', sommaAnonima(2, 3)); // 5
// console.log('sommaArrow:', sommaArrow(2, 3)); // 5

// SNACK 2
export const quadrato = (n) => n * n;

// console.log('quadrato:', quadrato(4)); // 16

// SNACK 3
export const eseguiOperazione = (a, b, op) => op(a, b);

// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;
// console.log('eseguiOperazione (somma):', eseguiOperazione(3, 4, somma)); // 7
// console.log(
//   'eseguiOperazione (moltiplica):',
//   eseguiOperazione(3, 4, moltiplica), // 12
// );

// SNACK 4
export const creaTimer = (ms) => () =>
  setTimeout(() => console.log('creaTimer:', 'Tempo scaduto!'), ms);

// const timer = creaTimer(200);
// timer(); // Dopo 200ms verrà stampato "creaTimer: Tempo scaduto!"

// SNACK 5
export const stampaOgniSecondo = (msg) =>
  setInterval(() => {
    console.log('stampaOgniSecondo:', msg);
  }, 1000);

// const intervalId = stampaOgniSecondo('...'); // ... ogni secondo
// setTimeout(() => clearInterval(intervalId), 3000); // stop dopo 3 secondi

// SNACK 6
export const creaContatoreAutomatico = (ms) => {
  let counter = 0;

  return () =>
    setInterval(() => {
      console.log('creaContatoreAutomatico:', ++counter);
    }, ms);
};

// const contatore = creaContatoreAutomatico(1000);
// const contatoreId = contatore(); // Avvia il contatore automatico
// setTimeout(() => clearInterval(contatoreId), 3000); // stop dopo 3 secondi

// SNACK 7
export const eseguiEFerma = (msg, intervalMs, stopMs) => {
  const intervalId = setInterval(() => {
    console.log(msg);
  }, intervalMs);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Timer fermato');
  }, stopMs);
};

// eseguiEFerma('eseguiEFerma', 1000, 3000); // Stampa ogni secondo, stop dopo 3

// --------------------
// BONUS

// SNACK 8
export const contoAllaRovescia = (n) => {
  console.log('contoAllaRovescia:', n);

  const intervalId = setInterval(() => {
    n--;

    if (n < 1) {
      clearInterval(intervalId);
      console.log('Tempo scaduto!');
    } else {
      console.log('contoAllaRovescia:', n);
    }
  }, 1000);
};

// contoAllaRovescia(5); // Avvia il conto alla rovescia da 5

// SNACK 9
export const sequenzaOperazioni = (operazioni, ms) => {
  operazioni.forEach((op, index) => {
    if (index === 0) op();
    else setTimeout(op, ms * index);
  });
};

// sequenzaOperazioni(
//   [
//     () => console.log('sequenzaOperazioni:', 'Operazione 1'),
//     () => console.log('sequenzaOperazioni:', 'Operazione 2'),
//     () => console.log('sequenzaOperazioni:', 'Operazione 3'),
//   ],
//   2000,
// ); // Esegue le operazioni in sequenza ogni 2 secondi

// SNACK 10
export const creaThrottler = (fn, limit) => {
  let blocked = false;

  return () => {
    if (blocked) return;

    blocked = true;
    fn();

    setTimeout(() => {
      blocked = false;
    }, limit);
  };
};

// const throttledLog = creaThrottler(
//   () => console.log('creaThrottler:', 'Eseguito!'),
//   2000,
// );

// throttledLog(); // ✅
// throttledLog(); // ❌
// setTimeout(throttledLog, 2500); // ✅ (chiamato dopo 2.5 secondi)
