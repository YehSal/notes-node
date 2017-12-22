console.log('notes.js starting!');

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('Getting all notes');
};

var readNote = (title) => {
	console.log("Reading", title);
};

var removeNote = (title) => {
	console.log("Deleting", title);
};

module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
};
