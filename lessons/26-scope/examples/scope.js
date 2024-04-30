const globalVar = 'I am global';

function outer() {
  const outerVar = 'outer';
  if (true) {
    const blockVar = 'block';
    console.log(globalVar, outerVar, blockVar); // all visible
  }
  // console.log(blockVar); // ERROR — block-scoped
}
outer();

// shadowing
const x = 1;
function demo() {
  const x = 2; // shadows the outer x
  console.log(x); // 2
}
demo();
console.log(x); // 1
