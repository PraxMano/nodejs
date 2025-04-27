const { writeFileSync } = require('fs');
// write a file with a big number list synchronously
for (i = 0; i < 1000; i++) {
  writeFileSync('./content/big-file.txt', `Number ${i}\n`, { flag: 'a' });
}

// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }
