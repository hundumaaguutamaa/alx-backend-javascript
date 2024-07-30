// Export a const instance of WeakMap and name it weakMap. 
export const weakMap = new WeakMap();


// Export new function queryAPI
export function queryAPI(endpoint) {
	\\ Check if endpoint exist in weakMap
	if (!weakMap.has(endpoint)) {
		\\ if not initialize count to 0
		weakMap.set(endpoint, 0);
	}

	\\ Increment endpoit 
	const count = weakMap.get(endpoint) + 1;
	if (weakMap.get(endpoint) >= 5) throw Error('Endpoint load is high');
}
}



