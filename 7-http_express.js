// 7-http_express.js

const express = require('express');
const { readFile } = require('fs');
const path = require('path');

const app = express();
const port = 1245;

// Helper function to process the CSV file
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

// Route for the root endpoint
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

// Route for the /students endpoint
app.get('/students', (req, res) => {
  const dbFile = process.argv[2];
  if (!dbFile) {
    res.status(500).send('Cannot load the database');
    return;
  }

  const filePath = path.resolve(dbFile);
  countStudents(filePath).then((output) => {
    res.type('text/plain');
    res.send(`This is the list of our students\n${output}`);
  }).catch(() => {
    res.status(500).send('This is the list of our students\nCannot load the database');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}/`);
});

// Export the app variable
module.exports = app;
