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

/**
    <en_us>en_us</en_us>
    <zh_cn>回车</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const CR = '\r';

/**
    <en_us>en_us</en_us>
    <zh_cn>换行</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const LF = '\n';

/**
    <en_us>en_us</en_us>
    <zh_cn>回车换行符</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const CRLF = '\r\n';

/**
    <en_us>en_us</en_us>
    <zh_cn>拆分专用分隔符，先把一系列特殊的字符串替换成这个，再用这个进一步拆分</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const SPLIT_SEPARATOR = '\0';

declare global {
	interface String {
		/**
            <en_us>en_us</en_us>
            <zh_cn>将指定字符串字面量或正则表达式，替换为拆分专用分隔符</zh_cn>
            <zh_tw>zh_tw</zh_tw>

            @param from {string | RegExp} <en_us>en_us</en_us><zh_cn>想要替换为拆分专用分隔符的字符串字面量或正则表达式</zh_cn><zh_tw>zh_tw</zh_tw>
            @returns {string} <en_us>en_us</en_us><zh_cn>替换结果</zh_cn><zh_tw>zh_tw</zh_tw>
        */
		_replaceToSplitSeparator(this: string, from: string | RegExp): string;
	}
}

String.prototype._replaceToSplitSeparator = function (from: string | RegExp): string {
	return this.replace(from, SPLIT_SEPARATOR);
};

// @see https://www.cnblogs.com/wengxuesong/p/5613178.html
