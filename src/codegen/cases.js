'use strict';

const camelcase = require('camelcase');

function pascal(source) {
	const camel = camelcase(source);
	return camel[0].toUpperCase() + camel.substr(1);
}

module.exports = {
	camel: camelcase,
	pascal: pascal
}
