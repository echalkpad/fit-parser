'use strict';

/**
 * segment_delete_status enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'do_not_delete',
	1: 'delete_one',
	2: 'delete_all'
};

class SegmentDeleteStatus extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = SegmentDeleteStatus;

SegmentDeleteStatus.DoNotDelete = 0;
SegmentDeleteStatus.DeleteOne = 1;
SegmentDeleteStatus.DeleteAll = 2;