const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("i know how to open node..YAY");
})
app.listen(3000, () => console.log('listening port 3000'))