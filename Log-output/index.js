const { v4: uuidv4 } = require('uuid');

const appUUID = uuidv4();

function logUUIDWithTimestamp() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}:  ${appUUID}`);
}

logUUIDWithTimestamp();

setInterval(logUUIDWithTimestamp, 5000);
