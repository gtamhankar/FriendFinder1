// create the server using express framework
var express = require('express');
var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.urlencoded( {extended: true}));
app.use(express.json());

// Public Folder
app.use(express.static(__dirname + '/public'));

require ('./routing/api-routes.js')(app);
require ('./routing/html-routes.js')(app);

app.listen(PORT, function () {
	console.log ("app listening to PORT: " + PORT);
});


