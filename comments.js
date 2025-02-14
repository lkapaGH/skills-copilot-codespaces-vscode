const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// In this example, we're creating a server that listens on port 3000. When a request is made to the server, it will respond with the text "Hello, World!". 
// This is a simple example of a server that can be run locally on your machine. 
// You can access the server by opening a web browser and navigating to http://