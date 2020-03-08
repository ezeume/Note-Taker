// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


//Output path


//Get routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("_dirname"));
var notes = require("./db/db.json");

// API ROUTES
app.get("/api/notes", function (req, res) {
    res.json(notes);
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "puplic/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "puplic/index.html"));
  });


// Sets up the Express app to handle data parsing


//post







//writeFile

fs.writeFile(notes.html, html, function (err) {

    if (err) {
        return console.log(err);
    }


});



// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/note", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});



// // Displays all characters
// app.get("/api/characters", function (req, res) {
//     return res.json(characters);
// });
// // when the user goes to localhost:3000/notes the user will see the notes.html file

// // when the user goes to localhost:3000 the user will see the index.html file









// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
