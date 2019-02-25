const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, "../public"); // built-in 'path' module
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

app.listen(3000, () => {
   console.log(`Server is listening on port ${port}`);
});