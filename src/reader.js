'use strict';

class Reader {
	constructor(buffer) {
		this.buffer = buffer;
		this.pos = 0;
	}

	skip(count) {
		this.pos += count || 1;
	}

	byte() {
		return this.buffer[this.pos++];
	}

	bytes(count) {
		const length = count || 1;
		const result = this.buffer.slice(this.pos, this.pos + length);
		this.pos += length;

		return result;
	}

	string(len) {
		const length = len || 1;
		const result = this.buffer.toString('ascii', this.pos, this.pos + length)
		this.pos += length;

		return result;
	}

	UInt16BE() {
		const result = this.buffer.readUInt16BE(this.pos);
		this.pos += 2;

		return result;
	}

	UInt32BE() {
		const result = this.buffer.readUInt32BE(this.pos);
		this.pos += 4;

		return result;
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
