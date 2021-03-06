'use strict';

const propValue = Symbol();

module.exports = class Type {
	constructor(value) {
		this[propValue] = value;
	}

	get value() {
		return this[propValue];
	}

	valueOf() {
		return this[propValue];
	}

	toString() {
		return this.constructor.getValues()[this[propValue]];
	}

	static getValues() {
		throw new Error('No values defined');
	}

	static getSourceType() {
		throw new Error('No source type defined');
	}
}
