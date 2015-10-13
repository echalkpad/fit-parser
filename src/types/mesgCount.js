'use strict';

/**
 * mesg_count enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'num_per_file',
	1: 'max_per_file',
	2: 'max_per_file_type'
};

module.exports = class MesgCount extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};
