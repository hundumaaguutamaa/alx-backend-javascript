const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        return reject(err);
      }

      const lines = data.toString().split('\n');
      for (const line of lines) {
        if (line.trim()) {
          const field = line.split(',');
          if (field.length < 4) {
            continue; // Skip lines with insufficient fields
          }
          length += 1;
          const [name, , , fieldValue] = field;
          if (students[fieldValue]) {
            students[fieldValue].push(name);
          } else {
            students[fieldValue] = [name];
          }
          fields[fieldValue] = (fields[fieldValue] || 0) + 1;
        }
      }
      const totalStudents = length - 1; // Assuming header row
      let output = `Number of students: ${totalStudents}\n`;
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          output += `Number of students in ${key}: ${value}. `;
          output += `List: ${students[key].join(', ')}\n`;
        }
      }
      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((output) => {
      res.end(output);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
