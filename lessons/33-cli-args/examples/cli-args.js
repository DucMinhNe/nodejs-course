// run: node cli-args.js hello world --verbose
const args = process.argv.slice(2);
console.log('args:', args); // ['hello', 'world', '--verbose']

const verbose = args.includes('--verbose');
const positional = args.filter(a => !a.startsWith('--'));
console.log('verbose:', verbose);
console.log('positional:', positional);

if (positional.length === 0) {
  console.error('usage: node cli-args.js <name>');
  process.exit(1);
}
