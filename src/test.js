const helloWorld = require('./index.js');

helloWorld.handler(null, null, (error, data) => {
	if (data.slice(-12) === ' From GitHub') {
		console.log('PASS');
	}
	else {
		console.log('FAIL');
	}
});
