/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * date.ts
 *
 * <en_us>
 * Created on Mon Jan 15 2024 20:19:27
 * Feature:
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月15日 20:19:27
 * 功能：提供中国时区GMT+8相关方法
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 20:19:27
 * 功能：
 * </zh_tw>
 */

/**
 * <en_us>date correction value</en_us>
 * <zh_cn>日期修正值</zh_cn>
 * <zh_tw>日期修正值</zh_tw>
 */
export const DATE_OFFSET_GMT8 = 1000 * 60 * 60 * 8;

/**
 * <en_us>Get the corrected date</en_us>
 * <zh_cn>获取修正后的日期</zh_cn>
 * <zh_tw>取得修正後的日期</zh_tw>
 *
 * @returns
 * <en_us>the corrected date</en_us>
 * <zh_cn>修正后的日期</zh_cn>
 * <zh_tw>修正後的日期</zh_tw>
 */
export function getFixedDate(): Date {
	return new Date(new Date().getTime() + DATE_OFFSET_GMT8);
}

/**
 * <en_us>Get the corrected date</en_us>
 * <zh_cn>获取修正后的日期</zh_cn>
 * <zh_tw>取得修正後的日期</zh_tw>
 *
 * @returns
 * <en_us>the corrected date</en_us>
 * <zh_cn>修正后的日期</zh_cn>
 * <zh_tw>修正後的日期</zh_tw>
 */
export function getFilenameTimestampPostfix(): string {
	// return getFixedDate().toJSON().replace('T', ' ').replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '');
	return '_'.concat(
		getFixedDate().toJSON().replace(/-/g, '').replace(/:/g, '').replace('T', '_').split('.')[0],
	);
}

declare global {
	interface Date {
		/**
		 * <en_us>en_us</en_us><zh_cn>获取增加中国GMT+8时区修正值的日期</zh_cn><zh_tw>zh_tw</zh_tw>
		 * @returns {Date} 加了中国GMT+8时区修正值的日期
		 */
		_addGmt8(): Date;

		/**
		 * <en_us>en_us</en_us><zh_cn>转为文件名时间戳后缀字符串</zh_cn><zh_tw>zh_tw</zh_tw>
		 * @returns {string} 文件名时间戳后缀
		 */
		_toFilenameTimestampPostfix(): string;

		/**
		 * <en_us>en_us</en_us><zh_cn>增加中国GMT+8时区修正值，再转文件名时间戳后缀字符串</zh_cn><zh_tw>zh_tw</zh_tw>
		 * @returns string 加了中国GMT+8时区修正值后，所转的文件名时间戳后缀
		 */
		_toGmt8FilenameTimestampPostfix(): string;
	}
}

Date.prototype._addGmt8 = function (): Date {
	return new Date(this.getTime() + DATE_OFFSET_GMT8);
};

Date.prototype._toFilenameTimestampPostfix = function (): string {
	return '_'.concat(
		this.toJSON().replace(/-/g, '').replace(/:/g, '').replace('T', '_').split('.')[0],
	);
};

Date.prototype._toGmt8FilenameTimestampPostfix = function (): string {
	return '_'.concat(
		(new Date(this.getTime() + DATE_OFFSET_GMT8))
			.toJSON()
			.replace(/-/g, '').replace(/:/g, '')
			.replace('T', '_').split('.')[0],
	);
};
