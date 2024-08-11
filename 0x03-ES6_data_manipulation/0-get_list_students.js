/**
 * Returns an array of student objects.
 * @returns {Array<Object>} List of students with id, firstName, and location attributes.
 */
function getListStudents() {
  return [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco'
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia'
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco'
    }
  ];
}

module.exports = getListStudents;

