const mongoose = require('mongoose');

const connectionLink = "mongodb://localhost/niro";

mongoose.connect(connectionLink)
	.then(() => {
		console.log('mongodb connected');
	})
	 .catch(() => {
		console.log('connection failer');
	});
