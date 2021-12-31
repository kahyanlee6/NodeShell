const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const command = data.toString().trim();
  const [cmd, filename] = command.split(' ');

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat') {
    cat(filename);
  } else if (cmd === 'curl') {
    curl(filename);
  }
});
