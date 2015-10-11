'use strict';

/**
 * gender enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

const ValuesMap = {
	0: 'female',
	1: 'male'
};

module.exports = class Gender extends BaseType {
	static getValues() {
		return ValuesMap;
	}
};
