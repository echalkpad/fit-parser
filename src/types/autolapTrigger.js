'use strict';

/**
 * autolap_trigger enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'time',
	1: 'distance',
	2: 'position_start',
	3: 'position_lap',
	4: 'position_waypoint',
	5: 'position_marked',
	6: 'off'
};

class AutolapTrigger extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = AutolapTrigger;

AutolapTrigger.Time = 0;
AutolapTrigger.Distance = 1;
AutolapTrigger.PositionStart = 2;
AutolapTrigger.PositionLap = 3;
AutolapTrigger.PositionWaypoint = 4;
AutolapTrigger.PositionMarked = 5;
AutolapTrigger.Off = 6;