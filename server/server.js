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
    // const addr = '192.168.2.27';
    const body = req.body;
    const addr = body.addr;
    const url = `http://${addr}:8060/keypress/${body.key}`;
    const press = async (url) => {
        try {
            const response = await axios.post(url);
            const data = response.data
        } catch {
            console.log(`failed to process request to ${url}`)
        }
    };
    press(url);
    res.send({ "code": 200 });
    console.log(url)
})

app.listen(port, () => {
    console.log(`Running server, listening at http://localhost:${port}`);
});