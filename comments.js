// Create web server
// Create a web server that listens on port 3000 and serves the contents of comments.js file

import { createServer } from 'http';
import { readFile } from 'fs';

const server = createServer((req, res) => {
    readFile('./comments.js', (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end();
            return;
        }
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});