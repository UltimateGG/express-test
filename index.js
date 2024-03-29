const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = 80;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
