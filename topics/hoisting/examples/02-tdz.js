// temporal dead zone demo
function demo() {
  // TDZ for `value` starts here
  // accessing it throws ReferenceError
  // ...
  let value = 1;
  return value;
}

console.log(demo()); // 1
