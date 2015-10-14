'use strict';

/**
 * left_right_balance_100 uint16
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	16383: 'mask',  // % contribution scaled by 100
	32768: 'right'  // data corresponds to right if set, otherwise unknown
};

class LeftRightBalance100 extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.UInt16;
	}
};

module.exports = LeftRightBalance100;

