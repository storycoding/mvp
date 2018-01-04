const express = require('express');
const app = express();

app.use(express.static('../client/dist')); //serves my bundle

//app.get('/', (req, res) => res.send('<h1>Hello World<h1>'));

app.listen(8080, () => console.log('listening on port 8080!')) // is this redundant because of how I run nodemon?