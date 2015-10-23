'use strict';

const FieldTypes = require('../FieldTypes');

module.exports = {
	'enum': FieldTypes.Enum,
	'sint8': FieldTypes.SInt8,
	'uint8': FieldTypes.UInt8,
	'sint16': FieldTypes.SInt16,
	'uint16': FieldTypes.UInt16,
	'sint32': FieldTypes.SInt32,
	'uint32': FieldTypes.UInt32,
	'string': FieldTypes.String,
	'float32': FieldTypes.Float32,
	'float64': FieldTypes.Float64,
	'uint8z': FieldTypes.UInt8z,
	'uint16z': FieldTypes.UInt16z,
	'uint32z': FieldTypes.UInt32z,
	'byte': FieldTypes.Byte
};
