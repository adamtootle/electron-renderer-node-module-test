const fs = require('fs');
const remote = require('electron').remote;

fs.readFile(remote.app.getAppPath() + '/test.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});