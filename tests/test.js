const assert = require('chai').assert;
const mathFunctions = require('../mathFunctions');

describe('Math Functions', function() {
	it('should add two numbers', function() {
		assert.equal(mathFunctions.add(2, 3), 5);
	});

	it('should subtract two numbers', function() {
		assert.equal(mathFunctions.subtract(5, 3), 2);
	});
});
