const { readFile, writeFile } = require('fs');
console.log('Started a first task');
// Check file path!!!

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('completed first task');
});
console.log('starting next task');
