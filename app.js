// app.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Node.js!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
