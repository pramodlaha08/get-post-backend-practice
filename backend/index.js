const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

app.get('/request', (req, res) => {
    let { name, password } = req.query;
    res.send(`send request with get request. Welcome ${name} with password ${password}`);

})
app.post('/request', (req, res) => {
    res.send('send request with post request. Welcome ', name);
    let { name, password } = req.body;
    console.log(`Welcome ${name} with password ${password}`);
})