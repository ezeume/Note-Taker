// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

let i = 1
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


//Output path
const OUTPUT_DIR = path.resolve(__dirname, "db")
const outputPath = path.join(OUTPUT_DIR, "db.json");

//Get routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
var notes = require("./db/db.json");

// API ROUTES
app.get("/api/notes", function (req, res) {
    res.json(notes);
});

//post
app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    newNote.id = i++
    notes.push(newNote);
    res.json(newNote)
})

//delete function


app.delete(`/api/notes/:id`, function(req,res) {
    var noteId = req.params.id;
    for (var i =0; i < notes.length; i++) {
        if (noteId == notes[i].id){
            notes.splice(i, 1);
        }
    }
   res.json(notes)
})

// HTML ROUTES
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
