'use strict';

/**
 * antplus_device_type uint8
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

const ValuesMap = {
	1: 'antfs',
	11: 'bike_power',
	12: 'environment_sensor_legacy',
	15: 'multi_sport_speed_distance',
	16: 'control',
	17: 'fitness_equipment',
	18: 'blood_pressure',
	19: 'geocache_node',
	20: 'light_electric_vehicle',
	25: 'env_sensor',
	26: 'racquet',
	119: 'weight_scale',
	120: 'heart_rate',
	121: 'bike_speed_cadence',
	122: 'bike_cadence',
	123: 'bike_speed',
	124: 'stride_speed_distance'
};

module.exports = class AntplusDeviceType extends BaseType {
	static getValues() {
		return ValuesMap;
	}
};
