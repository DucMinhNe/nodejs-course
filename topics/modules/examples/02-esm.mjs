// ES Modules (package.json: { "type": "module" })
// math.mjs
export function add(a, b) { return a + b; }
export function mul(a, b) { return a * b; }
export default { add, mul };

// index.mjs
import { add } from './math.mjs';
console.log(add(2, 3));
