'use strict';

/**
 * manufacturer uint16
 *
 * ****WARNING****  This file is auto-generated!  Do NOT edit this file.
 */

const BaseType = require('../type');

const ValuesMap = {
	1: 'garmin',
	2: 'garmin_fr405_antfs',        // Do not use.  Used by FR405 for ANTFS man id.
	3: 'zephyr',
	4: 'dayton',
	5: 'idt',
	6: 'srm',
	7: 'quarq',
	8: 'ibike',
	9: 'saris',
	10: 'spark_hk',
	11: 'tanita',
	12: 'echowell',
	13: 'dynastream_oem',
	14: 'nautilus',
	15: 'dynastream',
	16: 'timex',
	17: 'metrigear',
	18: 'xelic',
	19: 'beurer',
	20: 'cardiosport',
	21: 'a_and_d',
	22: 'hmm',
	23: 'suunto',
	24: 'thita_elektronik',
	25: 'gpulse',
	26: 'clean_mobile',
	27: 'pedal_brain',
	28: 'peaksware',
	29: 'saxonar',
	30: 'lemond_fitness',
	31: 'dexcom',
	32: 'wahoo_fitness',
	33: 'octane_fitness',
	34: 'archinoetics',
	35: 'the_hurt_box',
	36: 'citizen_systems',
	37: 'magellan',
	38: 'osynce',
	39: 'holux',
	40: 'concept2',
	42: 'one_giant_leap',
	43: 'ace_sensor',
	44: 'brim_brothers',
	45: 'xplova',
	46: 'perception_digital',
	47: 'bf1systems',
	48: 'pioneer',
	49: 'spantec',
	50: 'metalogics',
	51: '4iiiis',
	52: 'seiko_epson',
	53: 'seiko_epson_oem',
	54: 'ifor_powell',
	55: 'maxwell_guider',
	56: 'star_trac',
	57: 'breakaway',
	58: 'alatech_technology_ltd',
	59: 'mio_technology_europe',
	60: 'rotor',
	61: 'geonaute',
	62: 'id_bike',
	63: 'specialized',
	64: 'wtek',
	65: 'physical_enterprises',
	66: 'north_pole_engineering',
	67: 'bkool',
	68: 'cateye',
	69: 'stages_cycling',
	70: 'sigmasport',
	71: 'tomtom',
	72: 'peripedal',
	73: 'wattbike',
	76: 'moxy',
	77: 'ciclosport',
	78: 'powerbahn',
	79: 'acorn_projects_aps',
	80: 'lifebeam',
	81: 'bontrager',
	82: 'wellgo',
	83: 'scosche',
	84: 'magura',
	85: 'woodway',
	86: 'elite',
	87: 'nielsen_kellerman',
	88: 'dk_city',
	89: 'tacx',
	90: 'direction_technology',
	91: 'magtonic',
	92: '1partcarbon',
	93: 'inside_ride_technologies',
	94: 'sound_of_motion',
	95: 'stryd',
	96: 'icg',                      // Indoorcycling Group
	97: 'mi_pulse',
	98: 'bsx_athletics',
	99: 'look',
	255: 'development',
	257: 'healthandlife',
	258: 'lezyne',
	259: 'scribe_labs',
	260: 'zwift',
	261: 'watteam',
	262: 'recon',
	263: 'favero_electronics',
	264: 'dynovelo',
	265: 'strava',
	5759: 'actigraphcorp'
};

module.exports = class Manufacturer extends BaseType {
	static getValues() {
		return ValuesMap;
	}
};
