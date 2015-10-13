'use strict';

/**
 * workout_capabilities uint32z
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	1: 'interval',
	2: 'custom',
	4: 'fitness_equipment',
	8: 'firstbeat',
	16: 'new_leaf',
	32: 'tcx',              // For backwards compatibility.  Watch should add missing id fields then clear flag.
	128: 'speed',           // Speed source required for workout step.
	256: 'heart_rate',      // Heart rate source required for workout step.
	512: 'distance',        // Distance source required for workout step.
	1024: 'cadence',        // Cadence source required for workout step.
	2048: 'power',          // Power source required for workout step.
	4096: 'grade',          // Grade source required for workout step.
	8192: 'resistance',     // Resistance source required for workout step.
	16384: 'protected'
};

module.exports = class WorkoutCapabilities extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.UInt32z;
	}
};
