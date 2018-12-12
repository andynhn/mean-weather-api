const express = require('express'),
        bodyParser = require('body-parser'),
        app = express(), 
        port = 8000,
        path = require('path');

app.use(bodyParser.json());
app.use(express.static( path.join(__dirname, './public/dist/public' )));

require('./server/config/routes.js')(app)

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})