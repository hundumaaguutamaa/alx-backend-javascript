// Display the initial welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set up an event listener to capture user input from stdin
process.stdin.on('data', (data) => {
  // Output the user's name
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
  // End the process
  process.exit();
});

// Display the closing message When the process exits
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
