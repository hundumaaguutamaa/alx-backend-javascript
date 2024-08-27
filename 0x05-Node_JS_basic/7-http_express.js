const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 1245;

// Helper function to process the CSV file and count students
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    return reject(new Error('Cannot load the database'));
  }

  fs.readFile(dataPath, (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const reportParts = [];
    const fileLines = data.toString('utf-8').trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    fileLines.slice(1).forEach((line) => {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentPropValues[idx],
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    });

    const totalStudents = Object.values(studentGroups).reduce(
      (acc, group) => acc + group.length,
      0,
    );
    reportParts.push(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      reportParts.push(
        `Number of students in ${field}: ${group.length}. List: ${group
          .map((student) => student.firstname)
          .join(', ')}`
      );
    }

    resolve(reportParts.join('\n'));
  });
});

// Route for the root endpoint
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Route for the /students endpoint
app.get('/students', (_, res) => {
  const dbFile = process.argv[2];
  if (!dbFile) {
    res.status(500).send('This is the list of our students\nCannot load the database');
    return;
  }

  const filePath = path.resolve(dbFile);
  countStudents(filePath)
    .then((report) => {
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(`This is the list of our students\n${report}`);
    })
    .catch((err) => {
      res.status(500).send(`This is the list of our students\n${err.message}`);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}/`);
});

// Export the app variable
module.exports = app;
