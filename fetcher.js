const request = require('request');
const fs = require('fs');

const fetcher = (commands, callback) => {
  let url = (commands[0]);
  let file = (commands[1]);
  request(url, (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    let data = new Uint8Array(Buffer.from(body));
    saveFile(file, data);
  });
};

const saveFile = (file, data) => {
  fs.writeFile(file, data, (error) => {
    if (error) throw err;
    let stats = fs.statSync(file);
    let sizeInBytes = stats["size"]
    console.log(`Download and saved ${sizeInBytes} bytes to ${file}!`);
  });
};

const commands = (process.argv.slice(2));
fetcher(commands);
