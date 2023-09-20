// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const commentRoutes = require('./routes/comments.js')(app);

// Start server
const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
});