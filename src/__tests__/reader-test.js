jest.dontMock('../reader');

const Reader = require('../reader');

describe('Buffer reader', () => {
	let reader;

	beforeEach(() => reader = new Reader(new Buffer('test')));

	it('should increment position on [skip] call', () => {
		let pos = reader.pos;

		reader.skip();

		expect(reader.pos).toBe(pos + 1);

		reader.skip(2);

		expect(reader.pos).toBe(pos + 3);
	});

	it('should return a byte on [byte] call', () => {
		const byte = reader.byte();

		expect(byte).toBe(new Buffer('t')[0]);
		expect(reader.pos).toBe(1);
	});

	it('should return string on [string] call', () => {
		expect(reader.string(2)).toBe('te');
		expect(reader.pos).toBe(2);

		expect(reader.string()).toBe('s');
		expect(reader.pos).toBe(3);
	});

	it('should return 16 bit unsigned int on [UInt16BE] call', () => {
		const res = reader.UInt16BE();

		expect(res).toBe(29797);
		expect(reader.pos).toBe(2);
	});

	it('should return 32 bit unsigned int on [UInt32BE] call', () => {
		const res = reader.UInt32BE();

		expect(res).toBe(1952805748);
		expect(reader.pos).toBe(4);
	});

	it('should return 16 bit unsigned int on [UInt16LE] call', () => {
		const res = reader.UInt16LE();

		expect(res).toBe(25972);
		expect(reader.pos).toBe(2);
	});

	it('should return 32 bit unsigned int on [UInt32LE] call', () => {
		const res = reader.UInt32LE();

		expect(res).toBe(1953719668);
		expect(reader.pos).toBe(4);
	});
});
