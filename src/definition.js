'use strict';

const Field = require('./field');

class Definition {
	static parse(reader) {
		const definition = new this();

		reader.skip(); // reserved byte

		const arch = reader.byte();

		definition.messageNum = 0 === arch
			? reader.UInt16LE()
			: reader.UInt16BE();

		let fieldsCount = reader.byte();

		const fields = [];

		while (fieldsCount--) {
			fields.push(
				Field.parse(reader)
			);
		}

		definition.fields = fields;

		return definition;
	}
}

module.exports = Definition;
