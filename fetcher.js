const request = require('request');
const fs = require('fs');

const fetchingPage = (url, callback) => {
  request(url, (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    data = new Uint8Array(Buffer.from(body));
    callback();
  });
};

const fetcher = (commands) => {
  let url = (commands[0]);
  file = (commands[1]);
  fetchingPage(url, saveFile);
}; 

const saveFile = () => {
  fs.writeFile(file, data, (error) => {
    if (error) throw err;
    console.log('Download and saved!');
  });
};

const commands = (process.argv.slice(2));
fetcher(commands);
