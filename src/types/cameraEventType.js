'use strict';

/**
 * camera_event_type enum
 *
 * ****WARNING**** This file is auto-generated! Do NOT edit this file.
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
	0: 'video_start',                     // Start of video recording
	1: 'video_split',                     // Mark of video file split (end of one file, beginning of the other)
	2: 'video_end',                       // End of video recording
	3: 'photo_taken',                     // Still photo taken
	4: 'video_second_stream_start',
	5: 'video_second_stream_split',
	6: 'video_second_stream_end',
	7: 'video_split_start',               // Mark of video file split start
	8: 'video_second_stream_split_start'
};

class CameraEventType extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.Enum;
	}
};

module.exports = CameraEventType;

CameraEventType.VideoStart = 0;
CameraEventType.VideoSplit = 1;
CameraEventType.VideoEnd = 2;
CameraEventType.PhotoTaken = 3;
CameraEventType.VideoSecondStreamStart = 4;
CameraEventType.VideoSecondStreamSplit = 5;
CameraEventType.VideoSecondStreamEnd = 6;
CameraEventType.VideoSplitStart = 7;
CameraEventType.VideoSecondStreamSplitStart = 8;
