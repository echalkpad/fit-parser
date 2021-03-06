'use strict';

/**
 * segment_selection_type enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'starred',
	1: 'suggested'
};

class SegmentSelectionType extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = SegmentSelectionType;

SegmentSelectionType.Starred = 0;
SegmentSelectionType.Suggested = 1;