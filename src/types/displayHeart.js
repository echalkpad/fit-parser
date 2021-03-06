'use strict';

/**
 * display_heart enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'bpm',
	1: 'max',
	2: 'reserve'
};

class DisplayHeart extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = DisplayHeart;

DisplayHeart.Bpm = 0;
DisplayHeart.Max = 1;
DisplayHeart.Reserve = 2;