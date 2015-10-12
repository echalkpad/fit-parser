'use strict';

jest.dontMock('../type');

const BaseType = require('../type');

describe('Base type', () => {
	const testKey = 1;
	const testValue = 'myvalue';

	class MyBaseType extends BaseType {
		static getValues() {
			return {
				[testKey]: testValue
			}
		}
	}

	it('should provide toString and valueOf', () => {
		const someValue = new MyBaseType(testKey);

		expect(Number(someValue)).toBe(testKey);
		expect(String(someValue)).toBe(testValue);
	});

	it('should return undefined on unknown values', () => {
		const someWrongKey = testKey + 5;
		const someUnknownValue = new MyBaseType(someWrongKey);

		expect(Number(someUnknownValue)).toBe(someWrongKey);
		expect(someUnknownValue.toString()).not.toBeDefined();
	});
});
