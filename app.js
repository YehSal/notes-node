console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require("yargs");

const notes = require('./notes.js'); // Relative path

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if (command === "list") {
	notes.getAll();
} else if (command === "remove") {
	notes.removeNote(argv.title);
} else if (command === "read" ) {
	notes.readNote(argv.title);
} else {
	console.log('Command not recognized');
}