/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 */
export function queryAPI(endpoint) {
  // Check if endpoint exists in weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize count to 0
    weakMap.set(endpoint, 0);
  }
  
  // Increment endpoint count
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Throw an error if the number of calls exceeds the maximum
  if (count >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
<<<<<<< HEAD
}

=======
>>>>>>> 25d357e2b9fac4a6422f2ef5d4045aee127be5a3
