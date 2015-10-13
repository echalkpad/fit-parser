'use strict';

/**
 * ant_network enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'public',
	1: 'antplus',
	2: 'antfs',
	3: 'private'
};

module.exports = class AntNetwork extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};
