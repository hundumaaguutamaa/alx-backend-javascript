// createIteratorObject.js

/**
 * Creates an iterator object that iterates over all employees in the report
 * @param {Object} report - The report object containing all employees
 * @returns {Object} - An iterator object
 */
export default function createIteratorObject(report) {
    let employees = [];

    // Gather all employees from all departments
    for (const department of Object.values(report.allEmployees)) {
        employees = employees.concat(department);
    }

    return {
        [Symbol.iterator]() {
            let index = 0;

            return {
                next() {
                    if (index < employees.length) {
                        return { value: employees[index++], done: false };
                    }
                    return { done: true };
                },
            };
        },
    };
}

