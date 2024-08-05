// iterateThroughObject.js

/**
 * Iterates through the report object and returns a string of employee names separated by '|'
 * @param {Object} reportWithIterator - The iterator object from createIteratorObject
 * @returns {String} - A string of employee names separated by '|'
 */
export default function iterateThroughObject(reportWithIterator) {
    const employeeNames = [];

    for (const employee of reportWithIterator) {
        employeeNames.push(employee);
    }

    return employeeNames.join(' | ');
}

