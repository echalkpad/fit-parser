'use strict';

const Reader = require('./reader');
const Header = require('./header');

function parse(buffer) {
	const reader = new Reader(buffer);
	const header = Header.parse(reader);
}

module.exports = function(something) {
	if (Buffer.isBuffer(something)) {
		return parse(something);
	}

	throw new Error('streams not supported yet');
}
