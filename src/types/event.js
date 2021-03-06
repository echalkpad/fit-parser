'use strict';

/**
 * event enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'timer',                    // Group 0.  Start / stop_all
	3: 'workout',                  // start / stop
	4: 'workout_step',             // Start at beginning of workout.  Stop at end of each step.
	5: 'power_down',               // stop_all group 0
	6: 'power_up',                 // stop_all group 0
	7: 'off_course',               // start / stop group 0
	8: 'session',                  // Stop at end of each session.
	9: 'lap',                      // Stop at end of each lap.
	10: 'course_point',            // marker
	11: 'battery',                 // marker
	12: 'virtual_partner_pace',    // Group 1. Start at beginning of activity if VP enabled, when VP pace is changed during activity or VP enabled mid activity.  stop_disable when VP disabled.
	13: 'hr_high_alert',           // Group 0.  Start / stop when in alert condition.
	14: 'hr_low_alert',            // Group 0.  Start / stop when in alert condition.
	15: 'speed_high_alert',        // Group 0.  Start / stop when in alert condition.
	16: 'speed_low_alert',         // Group 0.  Start / stop when in alert condition.
	17: 'cad_high_alert',          // Group 0.  Start / stop when in alert condition.
	18: 'cad_low_alert',           // Group 0.  Start / stop when in alert condition.
	19: 'power_high_alert',        // Group 0.  Start / stop when in alert condition.
	20: 'power_low_alert',         // Group 0.  Start / stop when in alert condition.
	21: 'recovery_hr',             // marker
	22: 'battery_low',             // marker
	23: 'time_duration_alert',     // Group 1.  Start if enabled mid activity (not required at start of activity). Stop when duration is reached.  stop_disable if disabled.
	24: 'distance_duration_alert', // Group 1.  Start if enabled mid activity (not required at start of activity). Stop when duration is reached.  stop_disable if disabled.
	25: 'calorie_duration_alert',  // Group 1.  Start if enabled mid activity (not required at start of activity). Stop when duration is reached.  stop_disable if disabled.
	26: 'activity',                // Group 1..  Stop at end of activity.
	27: 'fitness_equipment',       // marker
	28: 'length',                  // Stop at end of each length.
	32: 'user_marker',             // marker
	33: 'sport_point',             // marker
	36: 'calibration',             // start/stop/marker
	42: 'front_gear_change',       // marker
	43: 'rear_gear_change',        // marker
	44: 'rider_position_change',   // marker
	45: 'elev_high_alert',         // Group 0.  Start / stop when in alert condition.
	46: 'elev_low_alert',          // Group 0.  Start / stop when in alert condition.
	47: 'comm_timeout'             // marker
};

class Event extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = Event;

Event.Timer = 0;
Event.Workout = 3;
Event.WorkoutStep = 4;
Event.PowerDown = 5;
Event.PowerUp = 6;
Event.OffCourse = 7;
Event.Session = 8;
Event.Lap = 9;
Event.CoursePoint = 10;
Event.Battery = 11;
Event.VirtualPartnerPace = 12;
Event.HrHighAlert = 13;
Event.HrLowAlert = 14;
Event.SpeedHighAlert = 15;
Event.SpeedLowAlert = 16;
Event.CadHighAlert = 17;
Event.CadLowAlert = 18;
Event.PowerHighAlert = 19;
Event.PowerLowAlert = 20;
Event.RecoveryHr = 21;
Event.BatteryLow = 22;
Event.TimeDurationAlert = 23;
Event.DistanceDurationAlert = 24;
Event.CalorieDurationAlert = 25;
Event.Activity = 26;
Event.FitnessEquipment = 27;
Event.Length = 28;
Event.UserMarker = 32;
Event.SportPoint = 33;
Event.Calibration = 36;
Event.FrontGearChange = 42;
Event.RearGearChange = 43;
Event.RiderPositionChange = 44;
Event.ElevHighAlert = 45;
Event.ElevLowAlert = 46;
Event.CommTimeout = 47;