const http = require('http');

const host = '0.0.0.0'; // Listen on all network interfaces
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n'); // Include newline for consistency
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

module.exports = app;
