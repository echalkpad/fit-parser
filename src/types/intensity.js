'use strict';

/**
 * intensity enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'active',
	1: 'rest',
	2: 'warmup',
	3: 'cooldown'
};

class Intensity extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = Intensity;

Intensity.Active = 0;
Intensity.Rest = 1;
Intensity.Warmup = 2;
Intensity.Cooldown = 3;