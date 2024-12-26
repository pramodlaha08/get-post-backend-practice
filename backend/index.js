const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

app.get('/request', (req, res) => {
    res.send('send request with get request');
})
app.post('/request', (req, res) => {
    res.send('send request with post request');
})