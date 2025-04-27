const http = require('http');

// using Event Emitter API
const server = http.createServer();

// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Wecome Prakash');
});

server.listen(5000, () => {
  console.log('Server listening on port 5000...');
});

// const http = require('http')

// // const server = http.createServer((req, res) => {
// //   res.end('Welcome')
// // })

// // Using Event Emitter API
// const server = http.createServer()
// // emits request event
// // subcribe to it / listen for it / respond to it
// server.on('request', (req, res) => {
//   res.end('Welcome')
// })

// server.listen(5000)
