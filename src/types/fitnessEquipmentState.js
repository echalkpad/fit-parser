'use strict';

/**
 * fitness_equipment_state enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'ready',
	1: 'in_use',
	2: 'paused',
	3: 'unknown'  // lost connection to fitness equipment
};

class FitnessEquipmentState extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = FitnessEquipmentState;

FitnessEquipmentState.Ready = 0;
FitnessEquipmentState.InUse = 1;
FitnessEquipmentState.Paused = 2;
FitnessEquipmentState.Unknown = 3;