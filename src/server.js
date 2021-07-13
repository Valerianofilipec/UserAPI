const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(routes);
app.use(express.json());
app.listen(3333, () => console.log("Pai tá ON!"));