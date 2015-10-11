'use strict';

/**
 * length_type enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

module.exports = class LengthType extends BaseType {
	static getValues() {
		return {
			0: 'idle',   // Rest period. Length with no strokes
			1: 'active'  // Length with strokes.
		};
	}
}
