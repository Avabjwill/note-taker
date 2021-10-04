//Dependencies
const express = require("express");

// Sets up the Express App Configuration
const app = express();

// Sets port for listening use port 8000
const PORT = process.env.PORT || 8000;

//express is data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Port listen when app is launched
app.listen(PORT, () => console.log("Server listening on port " + PORT));