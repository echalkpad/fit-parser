'use strict';

const Field = require('./field');

const Types = { };

[
	require('./messages/fileId'),
	require('./messages/fileCreator'),
	require('./messages/event'),
	require('./messages/record')
].forEach(TypeClass => {
	Types[TypeClass.getId()] = TypeClass;
});

const TimestampFieldNumber = 253;

module.exports = function(reader, definition) {
	const type = definition.messageNum;
	const data = { };

	console.log(definition);

	definition.fields.forEach(field => {
		let value;

		switch (field.type) {
			/*
			case Field.TYPE_ENUM:
			case Field.TYPE_BYTE:
			case Field.TYPE_UINT8:
			case Field.TYPE_UINT8Z:
				value = reader.byte();
				break;
			case Field.TYPE_SINT16:
				value = reader.int16LE();
				break;
			case Field.TYPE_UINT16:
				value = reader.UInt16LE();
				break;
			case Field.TYPE_UINT32:
			case Field.TYPE_UINT32Z:
				value = reader.UInt32LE();
				break;*/
			default:
				value = reader.bytes(field.size);
				break;

                     // case Fit.SInt8:
                     //    value = mesgReader.ReadSByte();
                     //    break;
/*
                     case Fit.SInt16:
                        value = mesgReader.ReadInt16();
                        break;

                     case Fit.UInt16:
                     case Fit.UInt16z:
                        value = mesgReader.ReadUInt16();
                        break;

                     case Fit.SInt32:
                        value = mesgReader.ReadInt32();
                        break;

                     case Fit.UInt32:
                     case Fit.UInt32z:
                        value = mesgReader.ReadUInt32();
                        break;

                     case Fit.Float32:
                        value = mesgReader.ReadSingle();
                        break;

                     case Fit.Float64:
                        value = mesgReader.ReadDouble();
                        break;

                     default:
                        value = mesgReader.ReadBytes(fieldDef.Size);
                        break;


Field.TYPE_SINT8 = 0x01;
Field.TYPE_UINT8 = 0x02;
Field.TYPE_SINT16 = 0x03;
Field.TYPE_UINT16 = 0x04;
Field.TYPE_SINT32 = 0x05;
Field.TYPE_UINT32 = 0x06;
Field.TYPE_STRING = 0x07;
Field.TYPE_FLOAT32 = 0x08;
Field.TYPE_FLOAT64 = 0x09;
Field.TYPE_UINT8Z = 0x0A;
Field.TYPE_UINT16Z = 0x0B;
Field.TYPE_UINT32Z = 0x0C;
Field.TYPE_BYTE = 0x0D;
*/

		}

		data[field.number] = value;
	});

	if (undefined === Types[type]) {
		console.log('unknown', type, data);
		return;
		// throw new Error('Unknown message type', type);
	}

	return Types[type].create(data);
};
