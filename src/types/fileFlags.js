'use strict';

/**
 * file_flags uint8z
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	2: 'read',
	4: 'write',
	8: 'erase'
};

class FileFlags extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.UInt8z;
	}
};

module.exports = FileFlags;
