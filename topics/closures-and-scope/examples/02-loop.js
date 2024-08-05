// closures + var pitfall
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10); // prints 3, 3, 3
}

// fixed with let (block scope)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 10); // prints 0, 1, 2
}
