const assert = require('assert');

const helloWorld = require('./index.js');

helloWorld.handler(null, null, (error, data) => {
	assert.deepStrictEqual(data.slice(-12), ' From GitHub');
	console.log('PASS');
});
