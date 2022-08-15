
// in server.js

// Require modules
const express = require('express');
	
// Create the Express app
const app = express();
	
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
app.get('/', function(req, res) { //request and response
    res.send(`attempting new lines`);
  });
	
// Tell the app to listen on port 4000
let server = app.listen(4000, function() {
    console.log('Listening on port ' + server.address().port);
});
