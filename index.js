const spawn = require('cross-spawn');
const path = require('path');
const fs = require('fs');

const LOCK_FILE = path.join(__dirname, 'pid.lock');

if (!fs.existsSync(LOCK_FILE)) {
  spawn('node',[path.join(__dirname, 'child.js')],
    { stdio: 'inherit' });
}
