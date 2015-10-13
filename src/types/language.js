'use strict';

/**
 * language enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'english',
	1: 'french',
	2: 'italian',
	3: 'german',
	4: 'spanish',
	5: 'croatian',
	6: 'czech',
	7: 'danish',
	8: 'dutch',
	9: 'finnish',
	10: 'greek',
	11: 'hungarian',
	12: 'norwegian',
	13: 'polish',
	14: 'portuguese',
	15: 'slovakian',
	16: 'slovenian',
	17: 'swedish',
	18: 'russian',
	19: 'turkish',
	20: 'latvian',
	21: 'ukrainian',
	22: 'arabic',
	23: 'farsi',
	24: 'bulgarian',
	25: 'romanian',
	254: 'custom'
};

module.exports = class Language extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};
