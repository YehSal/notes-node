console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require("yargs");

const notes = require('./notes.js'); // Relative path

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note saved successfully!');
		console.log('--');
		console.log(`Title: ${note.title}`);
	} else {
		console.log('Note title taken');
	}
} else if (command === "list") {
	notes.getAll();
} else if (command === "remove") {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else if (command === "read" ) {
	notes.readNote(argv.title);
} else {
	console.log('Command not recognized');
}