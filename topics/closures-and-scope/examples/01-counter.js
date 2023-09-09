// classic closure: counter factory
function makeCounter() {
  let n = 0;
  return {
    inc: () => ++n,
    dec: () => --n,
    get: () => n,
  };
}

const c = makeCounter();
c.inc(); c.inc(); c.inc();
console.log(c.get()); // 3
