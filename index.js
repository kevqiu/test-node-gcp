const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/test', (req, res) => res.json({ test: 'hello' }));
app.get('/api/test/2', (req, res) => res.json({ test: 'hello 2' }));

app.listen(PORT, console.log(`App listening on port ${PORT}`));