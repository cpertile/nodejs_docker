const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const server = express();

server.get('/', (req, res) => {
	res.send({ status: 200, message: 'Success' });
});

server.listen(PORT, HOST);
console.log(`Server up on http://${HOST}:${PORT}`);