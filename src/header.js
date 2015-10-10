'use strict';

const LENGTH_WITH_CRC = 14;
const LENGTH = LENGTH_WITH_CRC - 2;

class Header {
	static parse(reader) {
		const header = new this();

		header.size = reader.byte();
		header.protocolVersion = reader.byte();
		header.profileVersion = reader.UInt16LE();
		header.dataSize = reader.UInt32LE();

		const dataType = reader.string(4);
		if ('.FIT' !== dataType) {
			throw new Error('Data type mismatch');
		}

		if (LENGTH_WITH_CRC === header.size) {
			// @todo crc check
			header.crc = reader.UInt16LE();
		}

		return header;
	}
}

module.exports = Header;
