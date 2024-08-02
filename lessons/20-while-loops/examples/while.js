let i = 0;
while (i < 3) {
  console.log('while', i);
  i++;
}

let n = 0;
do {
  console.log('do-while runs at least once', n);
  n++;
} while (n < 0);

// break / continue
let x = 0;
while (true) {
  x++;
  if (x === 2) continue; // skip 2
  if (x > 4) break;      // stop after 4
  console.log(x);        // 1, 3, 4
}
