'use strict';

class Reader {
	constructor(buffer) {
		this.buffer = buffer;
		this.pos = 0;
	}

	skip(count = 1) {
		this.pos += count;
	}

	byte() {
		return this.buffer[this.pos++];
	}

	string(length = 1) {
		const result = this.buffer.toString('ascii', this.pos, this.pos + length)
		this.pos += length;

		return result.toString();
	}

	UInt16LE() {
		const result = this.buffer.readUInt16LE(this.pos);
		this.pos += 2;

		return result;
	}

	UInt32LE() {
		const result = this.buffer.readUInt32LE(this.pos);
		this.pos += 4;

		return result;
	}
}

module.exports = Reader;
