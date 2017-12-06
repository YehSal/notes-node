console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js'); // Relative path

var res = notes.addNote();
var add = notes.add(5, 10);
var user = os.userInfo();

console.log(res);
console.log(add);

fs.appendFile('greetings.txt', `Hello World ${user.username}!`, function(err) {
	if (err) {
		console.log('Found error!');
	}
});