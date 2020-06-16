const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('./database');

// Configure express app
const app = express();
app.use(bodyParser.json());
app.use(cors());


// API routes
const users = require('./api/users');
app.use('/api/users', users);

// Static routes
app.use(express.static(path.join(__dirname, './build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build'))
})

// Default port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
