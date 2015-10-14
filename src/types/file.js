'use strict';

/**
 * file enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	1: 'device',            // Read only, single file. Must be in root directory.
	2: 'settings',          // Read/write, single file. Directory=Settings
	3: 'sport',             // Read/write, multiple files, file number = sport type. Directory=Sports
	4: 'activity',          // Read/erase, multiple files. Directory=Activities
	5: 'workout',           // Read/write/erase, multiple files. Directory=Workouts
	6: 'course',            // Read/write/erase, multiple files. Directory=Courses
	7: 'schedules',         // Read/write, single file. Directory=Schedules
	9: 'weight',            // Read only, single file. Circular buffer. All message definitions at start of file. Directory=Weight
	10: 'totals',           // Read only, single file. Directory=Totals
	11: 'goals',            // Read/write, single file. Directory=Goals
	14: 'blood_pressure',   // Read only. Directory=Blood Pressure
	15: 'monitoring_a',     // Read only. Directory=Monitoring. File number=sub type.
	20: 'activity_summary', // Read/erase, multiple files. Directory=Activities
	28: 'monitoring_daily',
	32: 'monitoring_b',     // Read only. Directory=Monitoring. File number=identifier
	34: 'segment',          // Read/write/erase. Multiple Files.  Directory=Segments
	35: 'segment_list',     // Read/write/erase. Single File.  Directory=Segments
	247: 'mfg_range_min',   // 0xF7 - 0xFE reserved for manufacturer specific file types
	254: 'mfg_range_max'    // 0xF7 - 0xFE reserved for manufacturer specific file types
};

class File extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = File;

File.Device = 1;
File.Settings = 2;
File.Sport = 3;
File.Activity = 4;
File.Workout = 5;
File.Course = 6;
File.Schedules = 7;
File.Weight = 9;
File.Totals = 10;
File.Goals = 11;
File.BloodPressure = 14;
File.MonitoringA = 15;
File.ActivitySummary = 20;
File.MonitoringDaily = 28;
File.MonitoringB = 32;
File.Segment = 34;
File.SegmentList = 35;
File.MfgRangeMin = 247;
File.MfgRangeMax = 254;
