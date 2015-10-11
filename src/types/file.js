'use strict';

/**
 * file enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */
module.exports = {
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
