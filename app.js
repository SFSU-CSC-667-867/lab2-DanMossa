const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    console.log('Hello ' + req.query.username);
    res.send('world')
});
app.get('/add', (req, res) => res.send('0'));

app.listen(port, () => {
    return console.log(`Example app listening on port ${port}!`);
})