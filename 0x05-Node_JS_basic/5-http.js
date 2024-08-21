const http = require('http');
const { URL } = require('url');
const countStudents = require('./3-read_file_async'); 

// Use 0.0.0.0 to listen on all network interfaces
const host = '0.0.0.0'; 
const port = 1245;

const app = http.createServer(async (req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;

    if (path === '/') {
      // Root path handling
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!\n');
    } else if (path === '/students') {
      // Handle the /students path
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');

      // Get the query parameter 'database'
      const dbPath = parsedUrl.searchParams.get('database');
      if (!dbPath) {
        res.end('No database specified\n');
        return;
      }

      try {
        await countStudents(dbPath);
      
        res.end();
      } catch (error) {
        res.statusCode = 500;
        res.end('Cannot load the database\n');
      }
    } else {
      // unknown path handling
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found\n');
    }
  } catch (error) {
    // Handle unexpected errors
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error\n');
  }
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

module.exports = app;
