"use strict";
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
 * 功能：
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 20:19:27
 * 功能：
 * </zh_tw>
*/
exports.__esModule = true;
exports.getFilenameTimestampPostfix = exports.getFixedDate = exports.DATE_FIX_VALUE = void 0;
/**
 * <en_us>date correction value</en_us>
 * <zh_cn>日期修正值</zh_cn>
 * <zh_tw>日期修正值</zh_tw>
 */
exports.DATE_FIX_VALUE = 1000 * 60 * 60 * 8;
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
function getFixedDate() {
    return new Date(new Date().getTime() + exports.DATE_FIX_VALUE);
}
exports.getFixedDate = getFixedDate;
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
function getFilenameTimestampPostfix() {
    // return getFixedDate().toJSON().replace('T', ' ').replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '');
    return '_'.concat(getFixedDate().toJSON().replace(/-/g, '').replace(/:/g, '').replace('T', '_').split('.')[0]);
}
exports.getFilenameTimestampPostfix = getFilenameTimestampPostfix;
