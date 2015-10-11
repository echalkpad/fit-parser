'use strict';

/**
 * swim_stroke enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

const ValuesMap = {
	0: 'freestyle',
	1: 'backstroke',
	2: 'breaststroke',
	3: 'butterfly',
	4: 'drill',
	5: 'mixed',
	6: 'im'            // IM is a mixed interval containing the same number of lengths for each of: Butterfly, Backstroke, Breaststroke, Freestyle, swam in that order.
};

module.exports = class SwimStroke extends BaseType {
	static getValues() {
		return ValuesMap;
	}
};
