const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

// raw writes
process.stdout.write('no newline here');
process.stderr.write('this goes to stderr\n');
