// Snack 1
function sommaDichiarativa(a, b) {
  return a + b;
}

const sommaAnonima = function (a, b) {
  return a + b;
};

const sommaArrow = (a, b) => a + b;

console.log('sommaDichiarativa:', sommaDichiarativa(2, 3));
console.log('sommaAnonima:', sommaAnonima(2, 3));
console.log('sommaArrow:', sommaArrow(2, 3));

// Snack 2
const quadrato = (n) => n * n;

console.log('quadrato:', quadrato(4));

// Snack 3
const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
const eseguiOperazione = (a, b, op) => op(a, b);

console.log('eseguiOperazione (somma):', eseguiOperazione(3, 4, somma));
console.log(
  'eseguiOperazione (moltiplica):',
  eseguiOperazione(3, 4, moltiplica),
);

// Snack 4
const creaTimer = (ms) => () =>
  setTimeout(() => console.log('creaTimer:', 'Tempo scaduto!'), ms);

const timer = creaTimer(200);

timer();

// Snack 5
const stampaOgniSecondo = (msg) =>
  setInterval(() => {
    console.log('stampaOgniSecondo:', msg);
  }, 1000);

const intervalId = stampaOgniSecondo('...');
setTimeout(() => clearInterval(intervalId), 3000);

// Snack 6
const creaContatoreAutomatico = (ms) => {
  let counter = 0;

  return () =>
    setInterval(() => {
      console.log('creaContatoreAutomatico:', ++counter);
    }, ms);
};

const contatore = creaContatoreAutomatico(1000);
const contatoreId = contatore();

setTimeout(() => clearInterval(contatoreId), 3000);

// Snack 7
const eseguiEFerma = (msg, intervalMs, stopMs) => {
  const intervalId = setInterval(() => {
    console.log(msg);
  }, intervalMs);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Timer fermato');
  }, stopMs);
};

eseguiEFerma('eseguiEFerma', 1000, 3000);

// --------------------
// BONUS

// Snack 8
const contoAllaRovescia = (n) => {
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

contoAllaRovescia(5);

// Snack 9
const sequenzaOperazioni = (operazioni, ms) => {
  operazioni.forEach((op, index) => {
    if (index === 0) op();
    else setTimeout(op, ms * index);
  });
};

sequenzaOperazioni(
  [
    () => console.log('sequenzaOperazioni:', 'Operazione 1'),
    () => console.log('sequenzaOperazioni:', 'Operazione 2'),
    () => console.log('sequenzaOperazioni:', 'Operazione 3'),
  ],
  2000,
);
