'use strict';

jest.dontMock('../reader');
jest.dontMock('../header');

const Reader = require('../reader');
const Header = require('../header');

describe('Header', () => {

	it('should read the header buffer', () => {
		const content = new Buffer([
			14,               // size
			16,               // protocol version
			135, 0,           // profile version
			28, 43, 0, 0,     // data size
			46, 70, 73, 84,   // data type (.FIT)
			2, 132            // crc
		]);
		const reader = new Reader(content);

		const header = Header.parse(reader);

		expect(header.size).toBe(14);
		expect(header.protocolVersion).toBe(16);
		expect(header.profileVersion).toBe(135);
		expect(header.dataSize).toBe(11036);
		expect(header.crc).toBe(33794);
	});

	it('should throw an error on wrong data type', () => {
		const content = new Buffer([
			14, 16, 135, 0, 28, 43, 0, 0,
			46, 70, 0, 84, // data type
			2, 132
		]);
		const reader = new Reader(content);

		expect(() => Header.parse(reader)).toThrow();
	});

});
