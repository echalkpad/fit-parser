'use strict';

const cases = require('./cases');

module.exports = function(sheet, messageTypes) {
	let rowIndex = 3;

	while (rowIndex++ < 10) {
		console.log(sheet.row(rowIndex));
	}

	// console.log(messageTypes);
	// console.log(sheet.row(3));
}
