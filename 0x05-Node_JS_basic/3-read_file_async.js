const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // error reading the file, reject the Promise.
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines

      if (lines.length <= 1) {
        // only header is present or no lines, treat it as an error
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentsByField = {};
      let totalStudents = 0;

      // Iterate over the CSV lines, skipping the header
      for (let i = 1; i < lines.length; i++) {
        const student = lines[i].split(',');

        // Ensure that each line has the correct number of elements
        if (student.length === 4) {
          const [firstName, , , field] = student;
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
          totalStudents++;
        }
      }

      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field
      for (const [field, students] of Object.entries(studentsByField)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      // Resolve the Promise when done
      resolve();
    });
  });
}

module.exports = countStudents;
