const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big-file.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('./content/big-file.txt', 'utf8');
    fileStream.on('open', () => {
      console.log('File opened');
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      console.log('Error');
      res.end(err);
    });
  })
  .listen(5000, () => {
    console.log('Server listening on port 5000...');
  });

// var http = require('http')
// var fs = require('fs')

// http
//   .createServer(function (req, res) {
//     // const text = fs.readFileSync('./content/big.txt', 'utf8')
//     // res.end(text)
//     const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
//     fileStream.on('open', () => {
//       fileStream.pipe(res)
//     })
//     fileStream.on('error', (err) => {
//       res.end(err)
//     })
//   })
//   .listen(5000)
