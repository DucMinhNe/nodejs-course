const { EventEmitter } = require('events');

class Queue extends EventEmitter {
  constructor() { super(); this.items = []; }
  push(item) {
    this.items.push(item);
    this.emit('item', item);
  }
}

const q = new Queue();
q.on('item', (i) => console.log('got', i));
q.once('item', () => console.log('first item only'));
q.push('a');
q.push('b');

// always handle 'error'
q.on('error', (e) => console.error('q error', e));
q.emit('error', new Error('boom'));
