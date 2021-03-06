'use strict';

/**
 * source_type enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'ant',                  // External device connected with ANT
	1: 'antplus',              // External device connected with ANT+
	2: 'bluetooth',            // External device connected with BT
	3: 'bluetooth_low_energy', // External device connected with BLE
	4: 'wifi',                 // External device connected with Wifi
	5: 'local'                 // Onboard device
};

class SourceType extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = SourceType;

SourceType.Ant = 0;
SourceType.Antplus = 1;
SourceType.Bluetooth = 2;
SourceType.BluetoothLowEnergy = 3;
SourceType.Wifi = 4;
SourceType.Local = 5;