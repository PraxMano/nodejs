// Streams has four type of data
// Readable
// Writeable
// Duplex
// Transform

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big-file.txt', {
  highWaterMark: 90000,
});

// eventEmitter for stream listening for data
stream.on('data', (result) => {
  console.log(result);
});

// eventEmitter for error
stream.on('error', (err) => console.log(err));

// const { createReadStream } = require('fs')

// // default 64kb
// // last buffer - remainder
// // highWaterMark - control size
// // const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// // const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
// const stream = createReadStream('./content/big.txt')

// stream.on('data', (result) => {
//   console.log(result)
// })
// stream.on('error', (err) => console.log(err))
