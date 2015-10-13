'use strict';

/**
 * wkt_step_duration enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'time',
	1: 'distance',
	2: 'hr_less_than',
	3: 'hr_greater_than',
	4: 'calories',
	5: 'open',
	6: 'repeat_until_steps_cmplt',
	7: 'repeat_until_time',
	8: 'repeat_until_distance',
	9: 'repeat_until_calories',
	10: 'repeat_until_hr_less_than',
	11: 'repeat_until_hr_greater_than',
	12: 'repeat_until_power_less_than',
	13: 'repeat_until_power_greater_than',
	14: 'power_less_than',
	15: 'power_greater_than',
	28: 'repetition_time'
};

module.exports = class WktStepDuration extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};
