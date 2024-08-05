// bind / call / apply
function show(prefix) {
  console.log(prefix, this.name);
}

const user = { name: 'Minh' };
show.call(user, 'hi');   // hi Minh
show.apply(user, ['hi']); // hi Minh
const bound = show.bind(user, 'hello');
bound(); // hello Minh
