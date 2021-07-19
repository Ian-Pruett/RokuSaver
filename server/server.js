const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/test', (req, res) => {
    res.send({
        "msg": "hey there"
    })
});

app.post('/api/keypress', (req, res) => {
    const ip = '...';
    const body = req.body;
    const url = `http://${addr}:8060/keypress/${body.key}`;
    const press = async (url) => {
        try {
            const response = await axios.post(url);
            const data = response.data
            console.log(data)
        } catch {
            console.log(error)
        }
    };
    press(url);
    res.send({ "code": 200 });
})

app.listen(port, () => {
    console.log(`Running server, listening at http://localhost:${port}`);
});