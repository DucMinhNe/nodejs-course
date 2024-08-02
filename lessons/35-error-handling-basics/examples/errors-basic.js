function parseJSON(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('invalid JSON:', e.message);
    return null;
  } finally {
    console.log('parse attempt finished');
  }
}
console.log(parseJSON('{"a":1}')); // { a: 1 }
console.log(parseJSON('{bad}'));    // null

// throwing
function divide(a, b) {
  if (b === 0) throw new Error('cannot divide by zero');
  return a / b;
}
try { divide(1, 0); } catch (e) { console.error(e.message); }
