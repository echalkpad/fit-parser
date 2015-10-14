'use strict';

/**
 * event_type enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'start',
	1: 'stop',
	2: 'consecutive_depreciated',
	3: 'marker',
	4: 'stop_all',
	5: 'begin_depreciated',
	6: 'end_depreciated',
	7: 'end_all_depreciated',
	8: 'stop_disable',
	9: 'stop_disable_all'
};

class EventType extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = EventType;

EventType.Start = 0;
EventType.Stop = 1;
EventType.ConsecutiveDepreciated = 2;
EventType.Marker = 3;
EventType.StopAll = 4;
EventType.BeginDepreciated = 5;
EventType.EndDepreciated = 6;
EventType.EndAllDepreciated = 7;
EventType.StopDisable = 8;
EventType.StopDisableAll = 9;
