const request = require('supertest');
const app = require('../app'); // Assuming the app is in the app.js file
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
	it('responds with JSON containing "Hello, World!"', (done) => {
		request(app)
			.get('/')
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				const expected = {
					message: 'Hello, World!'
				};
				const actual = res.body;
				expect(actual).to.deep.equal(expected); // Using chai.expect
				done();
			});
	});
});