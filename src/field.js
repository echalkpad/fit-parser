'use strict';

class Field {
	static parse(reader) {
		const field = new this();

		field.number = reader.byte();
		field.size = reader.byte();

		const typeByte = reader.byte();

		if (64 === (typeByte & 64)) {
			field.isEndian = true;
		}

		field.type = typeByte & 15;

		return field;
	}
}

Field.TYPE_ENUM = 0x00;
Field.TYPE_SINT8 = 0x01;
Field.TYPE_UINT8 = 0x02;
Field.TYPE_SINT16 = 0x03;
Field.TYPE_UINT16 = 0x04;
Field.TYPE_SINT32 = 0x05;
Field.TYPE_UINT32 = 0x06;
Field.TYPE_STRING = 0x07;
Field.TYPE_FLOAT32 = 0x08;
Field.TYPE_FLOAT64 = 0x09;
Field.TYPE_UINT8Z = 0x0A;
Field.TYPE_UINT16Z = 0x0B;
Field.TYPE_UINT32Z = 0x0C;
Field.TYPE_BYTE = 0x0D;

module.exports = Field;
