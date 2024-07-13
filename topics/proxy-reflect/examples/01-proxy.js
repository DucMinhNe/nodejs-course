const obj = { x: 1 };
const p = new Proxy(obj, {
  get(target, prop) {
    console.log('GET', prop);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    if (prop === 'x' && typeof value !== 'number')
      throw new TypeError('x must be number');
    return Reflect.set(target, prop, value);
  },
});

p.x = 5;
console.log(p.x); // logs GET x then 5

function defaultsTo(target, defaults) {
  return new Proxy(target, {
    get(t, prop) {
      return prop in t ? t[prop] : defaults[prop];
    },
  });
}
const cfg = defaultsTo({ host: 'localhost' }, { port: 3000 });
console.log(cfg.port); // 3000
