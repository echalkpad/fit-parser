'use strict';

/**
 * activity_class enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

module.exports = class ActivityClass extends BaseType {
	static getValues() {
		return {
			127: 'level',     // 0 to 100
			100: 'level_max',
			128: 'athlete'
		};
	}
}
