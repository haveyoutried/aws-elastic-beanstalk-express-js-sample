const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('module 5'));

app.listen(port);
add .console.log(`App running on http://localhost:${port}`);
