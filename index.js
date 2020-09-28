const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const users = ['jahid', 'asad', 'moin', 'jahid', 'abir', 'john', 'alif', 'habu']

app.get('/', (req, res) => {
    res.send("Node ami onk pari..YAY");
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });
})
//POST
app.post('/addUser', (req, res) => {
    //SAVE TO DATABASE
    const user = req.body;
    user.id = 55;
    res.send(user);

})
app.listen(4000, () => console.log('listening port 4000'))