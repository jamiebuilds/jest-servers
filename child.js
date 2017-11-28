const onExit = require('signal-exit');
const path = require('path');
const fs = require('fs');

const LOCK_FILE = path.join(__dirname, 'lock');

fs.writeFileSync(LOCK_FILE, '', 'utf-8');

// ...

onExit(() => {
  fs.unlinkSync(LOCK_FILE);
});
