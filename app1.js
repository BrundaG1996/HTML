// Import the HTTP module
const http = require('http');

// Set hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set default response headers
  res.setHeader('Content-Type', 'text/html');

  // Handle different routes
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to the Homepage</h1>');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Us</h1><p>This is a simple Node.js server</p>');
  } else if (req.method === 'POST' && req.url === '/submit') {
    res.statusCode = 200;
    res.end('<h1>Form Submitted Successfully</h1>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});
