'use strict';

const fieldTypes = require('../fieldTypes');

module.exports = {
	'enum': fieldTypes.Enum,
	'sint8': fieldTypes.SInt8,
	'uint8': fieldTypes.UInt8,
	'sint16': fieldTypes.SInt16,
	'uint16': fieldTypes.UInt16,
	'sint32': fieldTypes.SInt32,
	'uint32': fieldTypes.UInt32,
	'string': fieldTypes.String,
	'float32': fieldTypes.Float32,
	'float64': fieldTypes.Float64,
	'uint8z': fieldTypes.UInt8z,
	'uint16z': fieldTypes.UInt16z,
	'uint32z': fieldTypes.UInt32z,
	'byte': fieldTypes.Byte
};
