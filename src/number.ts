/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * number.ts
 *
 * <en_us>
 * Created on Mon Jan 15 2024 22:34:52
 * Feature:
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月15日 22:34:52
 * 功能：提取数字类型相关辅助方法
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 22:34:52
 * 功能：
 * </zh_tw>
*/

/**
 * <en_us>Advanced rounding</en_us>
 * <zh_cn>高级四舍五入</zh_cn>
 * <zh_tw>高級四捨五入</zh_tw>
 *
 * @param num
 * <en_us>raw number</en_us>
 * <zh_cn>原始数字</zh_cn>
 * <zh_tw>原始數字</zh_tw>
 *
 * @param digit
 * <en_us>Number of digits</en_us>
 * <zh_cn>位数</zh_cn>
 * <zh_tw>位數</zh_tw>
 *
 * @returns
 * <en_us>Round results</en_us>
 * <zh_cn>四舍五入结果</zh_cn>
 * <zh_tw>四捨五入結果</zh_tw>
 */
export const superRound = (num: number, digit: number) => parseFloat(num.toFixed(digit));