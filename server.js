// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// var note = [{
//     noteTitle: "",
//     noteText: ""
// }];



// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/note", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});



// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});
// when the user goes to localhost:3000/notes the user will see the notes.html file

// when the user goes to localhost:3000 the user will see the index.html file









// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
