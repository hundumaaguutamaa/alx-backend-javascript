// Export a const instance of WeakMap and name it weakMap.
export const weakMap = new WeakMap();

const MAX_ENDPOINT_CALLS = 5;
// Export new function queryAPI
export function queryAPI(endpoint) {
    // Check if endpoint exists in weakMap
    if (!weakMap.has(endpoint)) {
        // if not, initialize count to 0
        weakMap.set(endpoint, 0);
    }

    // Increment endpoint count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    if (count >= 5) throw new Error('Endpoint load is high');
}
