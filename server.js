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
app.use(express.static("_dirname"));
var notes = require("./db/db.json");

// API ROUTES
app.get("/api/notes", function (req, res) {
    res.json(notes);
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "puplic/notes.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "puplic/index.html"));
  });


// Sets up the Express app to handle data parsing


//post
app.post("/api/notes", function (req, res){
    var newNote = req.body;
    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();
    newNote.id = i++
    notes.push(newNote);
})






//writeFile

fs.writeFile(outputPath, JSON.stringify(notes), function (err) {
    if (err) {
        // throw err
        // return console.log(err);
    }
    res.json(newNote);
});




// // // when the user goes to localhost:3000/notes the user will see the notes.html file

// // // when the user goes to localhost:3000 the user will see the index.html file

//delete function


// app.delete(`/api/notes/:id`, function(req,res) {
//     var noteId = req.params.id;
//     for (var i =0; i < notes.length; i++) {
//         if (noteId == notes[i].id){
//             notes.spliced(i, 1);

//             fs.writeFile(outputPath, JSON.stringify(notes), function (err) {
//                 if (err) {
//                     throw err
//                 }
//             })
//         }
//     }
// })







// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
