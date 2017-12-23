const fs = require('fs');

originalNote = {
	title: 'Inferno',
	author: 'Dante'
}

originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note.title);
