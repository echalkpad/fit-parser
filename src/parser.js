'use strict';

const Reader = require('./reader');
const Header = require('./header');
const Definition = require('./definition');

const parseMessage = require('./message');

const MessageDefinitionMask = 0x40;
const LocalMessageNumMask = 0x0f;

function parse(buffer) {
	const reader = new Reader(buffer);
	const header = Header.parse(reader);

	const definitions = { };

	while (true) {
		const typeByte = reader.byte();
		const localType = typeByte & LocalMessageNumMask;

		if (64 === (typeByte & MessageDefinitionMask)) {
			definitions[localType] = Definition.parse(reader);
		} else {
			if (undefined === definitions[localType]) {
				throw new Error('no definition found');
			}

			const definition = definitions[localType];

			const message = parseMessage(reader, definition);

			console.log(message);

			// break;
		}
	}
}

module.exports = function(something) {
	if (Buffer.isBuffer(something)) {
		return parse(something);
	}

	throw new Error('streams not supported yet');
}
