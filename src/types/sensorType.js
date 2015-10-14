'use strict';

/**
 * sensor_type enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'accelerometer',
	1: 'gyroscope',
	2: 'compass'
};

class SensorType extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = SensorType;

SensorType.Accelerometer = 0;
SensorType.Gyroscope = 1;
SensorType.Compass = 2;