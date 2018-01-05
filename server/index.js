const express = require('express');
const path = require('path');

const app = express();
//app.use(express.static('../client/dist')); //serves my bundle

app.use(express.static(path.join(__dirname, '../client/dist')));

//app.get('/', (req, res) => res.send('<h1>Hello World<h1>'));

app.listen(8080, () => console.log('listening on port 8080!')) // is this redundant because of how I run nodemon?