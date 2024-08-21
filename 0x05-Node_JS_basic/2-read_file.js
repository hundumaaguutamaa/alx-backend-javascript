const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously.
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines

    if (lines.length <= 1) {
      // If only header is present or no lines, treat it as an error
      throw new Error('Cannot load the database');
    }

    const studentsByField = {};
    let totalStudents = 0;

    // Iterate over the CSV lines, skipping the header
    for (let i = 1; i < lines.length; i++) {
      const student = lines[i].split(',');

      // check each line has the correct number of elements
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

    // Log the number of students 
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
