const path = require('path');

console.log(path.sep);

// file path name
const filePath = path.join('/content/', 'sub-folder', 'test.txt');
console.log(filePath);

// base path name
const base = path.basename(filePath);
console.log(base);

// absolute path name
const absolute = path.resolve(__dirname, 'content', 'sub-folder', 'test.txt');
console.log(absolute);

// absolute file name
const fileName = path.basename(absolute);
console.log(fileName);

// relative path
const relative = path.relative(filePath, absolute);
console.log(relative);
