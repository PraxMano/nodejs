const { userInfo, hostname, uptime } = require('os');

// info about current user
const user = userInfo();
console.log(user);

// info about the host name
const host = hostname();
console.log(host);

// method returns the system uptime in seconds
console.log(`The system uptime is: ${uptime()} seconds`);

const os = require('os');
const currentOs = {
  type: os.type(),
  name: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  version: os.version(),
  homedir: os.homedir(),
  uptime: os.uptime(),
  platform: os.platform(),
  arch: os.arch(),
  cpus: os.cpus(),
  networkInterfaces: os.networkInterfaces(),
  machine: os.machine(),
  endianness: os.endianness(),
};

console.log(currentOs);
