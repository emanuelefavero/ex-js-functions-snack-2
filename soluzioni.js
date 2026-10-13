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
