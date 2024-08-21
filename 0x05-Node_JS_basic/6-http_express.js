// Express server

const express = require('express');

const app = express();
const port = 1245;

// Defining a route for the root endpoint.
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port.
app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}/`);
});

// Export the app variable.
module.exports = app;
