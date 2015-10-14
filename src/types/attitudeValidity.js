'use strict';

/**
 * attitude_validity uint16
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	1: 'track_angle_heading_valid',
	2: 'pitch_valid',
	4: 'roll_valid',
	8: 'lateral_body_accel_valid',
	16: 'normal_body_accel_valid',
	32: 'turn_rate_valid',
	64: 'hw_fail',
	128: 'mag_invalid',
	256: 'no_gps',
	512: 'gps_invalid',
	1024: 'solution_coasting',
	2048: 'true_track_angle',
	4096: 'magnetic_heading'
};

class AttitudeValidity extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.UInt16;
	}
};

module.exports = AttitudeValidity;

