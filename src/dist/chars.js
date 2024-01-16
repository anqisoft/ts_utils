"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * chars.ts
 *
 * <en_us>
 * Created on Mon Jan 15 2024 20:17:19
 * Feature:
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月15日 20:17:19
 * 功能：提供特殊字符，如换行符、替换分隔符等
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 20:17:19
 * 功能：
 * </zh_tw>
 */
exports.__esModule = true;
exports.SPLIT_SEPARATOR = exports.CRLF = exports.LF = exports.CR = void 0;
/**
    <en_us>en_us</en_us>
    <zh_cn>回车</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
exports.CR = '\r';
/**
    <en_us>en_us</en_us>
    <zh_cn>换行</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
exports.LF = '\n';
/**
    <en_us>en_us</en_us>
    <zh_cn>回车换行符</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
exports.CRLF = '\r\n';
/**
    <en_us>en_us</en_us>
    <zh_cn>拆分专用分隔符，先把一系列特殊的字符串替换成这个，再用这个进一步拆分</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
exports.SPLIT_SEPARATOR = '\0';
String.prototype._replaceToSplitSeparator = function (from) {
    return this.replace(from, exports.SPLIT_SEPARATOR);
};
// @see https://www.cnblogs.com/wengxuesong/p/5613178.html
