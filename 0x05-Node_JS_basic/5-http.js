const http = require('http');
const { URL } = require('url');
const { readFile } = require('fs').promises; // Use promises API for consistency

// Use 0.0.0.0 to listen on all network interfaces
const host = '0.0.0.0'; 
const port = 1245;

async function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const data = await readFile(fileName);
    const lines = data.toString().split('\n');

    for (let i = 1; i < lines.length; i += 1) { // Skip header line
      const line = lines[i].trim();
      if (line) {
        length += 1;
        const field = line.split(',');
        const firstName = field[0];
        const fieldType = field[3];
        
        if (!students[fieldType]) {
          students[fieldType] = [];
        }
        students[fieldType].push(firstName);

        fields[fieldType] = (fields[fieldType] || 0) + 1;
      }
    }

    let output = `Number of students: ${length}\n`;
    for (const [key, value] of Object.entries(fields)) {
      output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
    }

    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;

    if (path === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!\n');
    } else if (path === '/students') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');

      const dbPath = parsedUrl.searchParams.get('database');
      if (!dbPath) {
        res.end('No database specified\n');
        return;
      }

      try {
        const output = await countStudents(dbPath);
        res.end(output);
      } catch (error) {
        res.statusCode = 500;
        res.end('Cannot load the database\n');
      }
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found\n');
    }
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error\n');
  }
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

module.exports = app;
