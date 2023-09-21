// arrow functions inherit `this`
const obj = {
  name: 'Node',
  delayed() {
    setTimeout(() => console.log(this.name), 10); // 'Node'
  },
  brokenDelayed() {
    setTimeout(function () { console.log(this.name); }, 10); // undefined
  },
};

obj.delayed();
obj.brokenDelayed();
