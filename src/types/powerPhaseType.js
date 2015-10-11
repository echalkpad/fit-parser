'use strict';

/**
 * power_phase_type enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

const ValuesMap = {
	0: 'power_phase_start_angle',
	1: 'power_phase_end_angle',
	2: 'power_phase_arc_length',
	3: 'power_phase_center'
};

module.exports = class PowerPhaseType extends BaseType {
	static getValues() {
		return ValuesMap;
	}
};
