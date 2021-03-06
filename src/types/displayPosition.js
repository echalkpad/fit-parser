'use strict';

/**
 * display_position enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'degree',                  // dd.dddddd
	1: 'degree_minute',           // dddmm.mmm
	2: 'degree_minute_second',    // dddmmss
	3: 'austrian_grid',           // Austrian Grid (BMN)
	4: 'british_grid',            // British National Grid
	5: 'dutch_grid',              // Dutch grid system
	6: 'hungarian_grid',          // Hungarian grid system
	7: 'finnish_grid',            // Finnish grid system Zone3 KKJ27
	8: 'german_grid',             // Gausss Krueger (German)
	9: 'icelandic_grid',          // Icelandic Grid
	10: 'indonesian_equatorial',  // Indonesian Equatorial LCO
	11: 'indonesian_irian',       // Indonesian Irian LCO
	12: 'indonesian_southern',    // Indonesian Southern LCO
	13: 'india_zone_0',           // India zone 0
	14: 'india_zone_IA',          // India zone IA
	15: 'india_zone_IB',          // India zone IB
	16: 'india_zone_IIA',         // India zone IIA
	17: 'india_zone_IIB',         // India zone IIB
	18: 'india_zone_IIIA',        // India zone IIIA
	19: 'india_zone_IIIB',        // India zone IIIB
	20: 'india_zone_IVA',         // India zone IVA
	21: 'india_zone_IVB',         // India zone IVB
	22: 'irish_transverse',       // Irish Transverse Mercator
	23: 'irish_grid',             // Irish Grid
	24: 'loran',                  // Loran TD
	25: 'maidenhead_grid',        // Maidenhead grid system
	26: 'mgrs_grid',              // MGRS grid system
	27: 'new_zealand_grid',       // New Zealand grid system
	28: 'new_zealand_transverse', // New Zealand Transverse Mercator
	29: 'qatar_grid',             // Qatar National Grid
	30: 'modified_swedish_grid',  // Modified RT-90 (Sweden)
	31: 'swedish_grid',           // RT-90 (Sweden)
	32: 'south_african_grid',     // South African Grid
	33: 'swiss_grid',             // Swiss CH-1903 grid
	34: 'taiwan_grid',            // Taiwan Grid
	35: 'united_states_grid',     // United States National Grid
	36: 'utm_ups_grid',           // UTM/UPS grid system
	37: 'west_malayan',           // West Malayan RSO
	38: 'borneo_rso',             // Borneo RSO
	39: 'estonian_grid',          // Estonian grid system
	40: 'latvian_grid',           // Latvian Transverse Mercator
	41: 'swedish_ref_99_grid'     // Reference Grid 99 TM (Swedish)
};

class DisplayPosition extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = DisplayPosition;

DisplayPosition.Degree = 0;
DisplayPosition.DegreeMinute = 1;
DisplayPosition.DegreeMinuteSecond = 2;
DisplayPosition.AustrianGrid = 3;
DisplayPosition.BritishGrid = 4;
DisplayPosition.DutchGrid = 5;
DisplayPosition.HungarianGrid = 6;
DisplayPosition.FinnishGrid = 7;
DisplayPosition.GermanGrid = 8;
DisplayPosition.IcelandicGrid = 9;
DisplayPosition.IndonesianEquatorial = 10;
DisplayPosition.IndonesianIrian = 11;
DisplayPosition.IndonesianSouthern = 12;
DisplayPosition.IndiaZone0 = 13;
DisplayPosition.IndiaZoneIa = 14;
DisplayPosition.IndiaZoneIb = 15;
DisplayPosition.IndiaZoneIia = 16;
DisplayPosition.IndiaZoneIib = 17;
DisplayPosition.IndiaZoneIiia = 18;
DisplayPosition.IndiaZoneIiib = 19;
DisplayPosition.IndiaZoneIva = 20;
DisplayPosition.IndiaZoneIvb = 21;
DisplayPosition.IrishTransverse = 22;
DisplayPosition.IrishGrid = 23;
DisplayPosition.Loran = 24;
DisplayPosition.MaidenheadGrid = 25;
DisplayPosition.MgrsGrid = 26;
DisplayPosition.NewZealandGrid = 27;
DisplayPosition.NewZealandTransverse = 28;
DisplayPosition.QatarGrid = 29;
DisplayPosition.ModifiedSwedishGrid = 30;
DisplayPosition.SwedishGrid = 31;
DisplayPosition.SouthAfricanGrid = 32;
DisplayPosition.SwissGrid = 33;
DisplayPosition.TaiwanGrid = 34;
DisplayPosition.UnitedStatesGrid = 35;
DisplayPosition.UtmUpsGrid = 36;
DisplayPosition.WestMalayan = 37;
DisplayPosition.BorneoRso = 38;
DisplayPosition.EstonianGrid = 39;
DisplayPosition.LatvianGrid = 40;
DisplayPosition.SwedishRef99Grid = 41;