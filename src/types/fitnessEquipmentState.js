'use strict';

/**
 * fitness_equipment_state enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

const ValuesMap = {
	0: 'ready',
	1: 'in_use',
	2: 'paused',
	3: 'unknown'  // lost connection to fitness equipment
};

module.exports = class FitnessEquipmentState extends BaseType {
	static getValues() {
		return ValuesMap;
	}
};
