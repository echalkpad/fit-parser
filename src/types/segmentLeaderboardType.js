'use strict';

/**
 * segment_leaderboard_type enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'overall',
	1: 'personal_best',
	2: 'connections',
	3: 'group',
	4: 'challenger',
	5: 'kom',
	6: 'qom',
	7: 'pr',
	8: 'goal',
	9: 'rival',
	10: 'club_leader'
};

class SegmentLeaderboardType extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = SegmentLeaderboardType;

SegmentLeaderboardType.Overall = 0;
SegmentLeaderboardType.PersonalBest = 1;
SegmentLeaderboardType.Connections = 2;
SegmentLeaderboardType.Group = 3;
SegmentLeaderboardType.Challenger = 4;
SegmentLeaderboardType.Kom = 5;
SegmentLeaderboardType.Qom = 6;
SegmentLeaderboardType.Pr = 7;
SegmentLeaderboardType.Goal = 8;
SegmentLeaderboardType.Rival = 9;
SegmentLeaderboardType.ClubLeader = 10;