"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * function.ts
 *
 * <en_us>
 * Created on Mon Jan 15 2024 22:13:58
 * Feature:
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月15日 22:13:58
 * 功能：提供方法的辅助方法，如同步方法、异步方法接口及相应守卫
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 22:13:58
 * 功能：
 * </zh_tw>
*/
exports.__esModule = true;
exports.isAsyncFunc = exports.isSyncFunc = void 0;
/*
 * <en_us>Guard: synchronization method</en_us>
 * <zh_cn>守卫：同步方法</zh_cn>
 * <zh_tw>守衛：同步方法</zh_tw>
*/
function isSyncFunc(func) {
    return func instanceof Function && !(func instanceof Promise);
}
exports.isSyncFunc = isSyncFunc;
/*
 * <en_us>Guard: Asynchronous method</en_us>
 * <zh_cn>守卫：异步方法</zh_cn>
 * <zh_tw>守衛：非同步方法</zh_tw>
*/
function isAsyncFunc(func) {
    return (func instanceof Promise);
}
exports.isAsyncFunc = isAsyncFunc;
