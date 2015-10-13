'use strict';

/**
 * sub_sport enum
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'generic',
	1: 'treadmill',                // Run/Fitness Equipment
	2: 'street',                   // Run
	3: 'trail',                    // Run
	4: 'track',                    // Run
	5: 'spin',                     // Cycling
	6: 'indoor_cycling',           // Cycling/Fitness Equipment
	7: 'road',                     // Cycling
	8: 'mountain',                 // Cycling
	9: 'downhill',                 // Cycling
	10: 'recumbent',               // Cycling
	11: 'cyclocross',              // Cycling
	12: 'hand_cycling',            // Cycling
	13: 'track_cycling',           // Cycling
	14: 'indoor_rowing',           // Fitness Equipment
	15: 'elliptical',              // Fitness Equipment
	16: 'stair_climbing',          // Fitness Equipment
	17: 'lap_swimming',            // Swimming
	18: 'open_water',              // Swimming
	19: 'flexibility_training',    // Training
	20: 'strength_training',       // Training
	21: 'warm_up',                 // Tennis
	22: 'match',                   // Tennis
	23: 'exercise',                // Tennis
	24: 'challenge',               // Tennis
	25: 'indoor_skiing',           // Fitness Equipment
	26: 'cardio_training',         // Training
	27: 'indoor_walking',          // Walking/Fitness Equipment
	28: 'e_bike_fitness',          // E-Biking
	29: 'bmx',                     // Cycling
	30: 'casual_walking',          // Walking
	31: 'speed_walking',           // Walking
	32: 'bike_to_run_transition',  // Transition
	33: 'run_to_bike_transition',  // Transition
	34: 'swim_to_bike_transition', // Transition
	35: 'atv',                     // Motorcycling
	36: 'motocross',               // Motorcycling
	37: 'backcountry',             // Alpine Skiing/Snowboarding
	38: 'resort',                  // Alpine Skiing/Snowboarding
	39: 'rc_drone',                // Flying
	40: 'wingsuit',                // Flying
	41: 'whitewater',              // Kayaking/Rafting
	254: 'all'
};

module.exports = class SubSport extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};
