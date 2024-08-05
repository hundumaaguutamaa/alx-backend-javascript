// createReportObject.js

/**
 * Creates a report object containing all employees and a method to get the number of departments
 * @param {Object} employeesList - The object containing departments and their employees
 * @returns {Object} - The report object with all employees and a method to get the number of departments
 */
export default function createReportObject(employeesList) {
    return {
        allEmployees: { ...employeesList },
        getNumberOfDepartments() {
            return Object.keys(employeesList).length;
        },
    };
}

