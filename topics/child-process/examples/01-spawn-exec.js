const { spawn, exec } = require('child_process');

const ls = spawn('ls', ['-la']);
ls.stdout.on('data', (d) => process.stdout.write(d));
ls.on('close', (code) => console.log('exit', code));

exec('git status', (err, stdout) => {
  if (err) return console.error(err);
  console.log(stdout);
});
