'use strict';

/**
 * local_date_time uint32
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	268435456: 'min'  // if date_time is < 0x10000000 then it is system time (seconds from device power on)
};

class LocalDateTime extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.UInt32;
	}
};

module.exports = LocalDateTime;
