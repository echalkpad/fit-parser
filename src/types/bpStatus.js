'use strict';

/**
 * bp_status enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

const ValuesMap = {
	0: 'no_error',
	1: 'error_incomplete_data',
	2: 'error_no_measurement',
	3: 'error_data_out_of_range',
	4: 'error_irregular_heart_rate'
};

module.exports = class BpStatus extends BaseType {
	static getValues() {
		return ValuesMap;
	}
};
