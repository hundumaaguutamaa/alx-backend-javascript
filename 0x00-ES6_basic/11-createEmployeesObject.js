// createEmployeesObject.js

/**
 * Creates an employees object for a given department
 * @param {string} departmentName - The name of the department
 * @param {string[]} employees - An array of employee names
 * @returns {Object} - An object representing the department and its employees
 */
export default function createEmployeesObject(departmentName, employees) {
    const obj = {
        [departmentName]: [...employees],
    };

    return obj;
}

