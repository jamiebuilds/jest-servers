const spawn = require('cross-spawn');
const path = require('path');
const fs = require('fs');

const LOCK_FILE = path.join(__dirname, 'lock');

if (!fs.statSync(LOCK_FILE).isFile()) {
  spawn(path.join(__dirname, 'child.js'));
}
