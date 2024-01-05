// custom transform stream
const { Transform } = require('stream');

class UpperCase extends Transform {
  _transform(chunk, _enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
}

process.stdin.pipe(new UpperCase()).pipe(process.stdout);
