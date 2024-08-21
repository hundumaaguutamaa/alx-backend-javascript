process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set up a single event listener for data input
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
  process.exit();
});

// Ensure the exit message is displayed when the process exits
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
