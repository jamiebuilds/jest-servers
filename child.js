const onExit = require('signal-exit');
const path = require('path');
const lockfile = require('lockfile');

const LOCK_FILE = path.join(__dirname, 'pid.lock');

lockfile.lock(LOCK_FILE, {wait:1000, retries: 5, stale: 50}, (err) => {
  if (err) {
    console.error('unable to create lock file');
  }
});

lockfile.check(LOCK_FILE, (err,isLocked) =>{
  if (err){
    console.error('no lock file created');
  }
});

// ...

onExit(() => {
  lockfile.unlock(LOCK_FILE, function (err) {
      console.error('unable to release lock file');
  })
});
