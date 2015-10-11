'use strict';

/**
 * battery_status uint8
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

module.exports = class BatteryStatus extends BaseType {
	static getValues() {
		return {
			1: 'new',
			2: 'good',
			3: 'ok',
			4: 'low',
			5: 'critical',
			7: 'unknown'
		};
	}
}
