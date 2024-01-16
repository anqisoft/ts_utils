"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * fs.ts
 *
 * <en_us>
 * Created on Mon Jan 15 2024 20:26:03
 * Feature:
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月15日 20:26:03
 * 功能：提供文件处理功能，以统一deno与node的写法
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 20:26:03
 * 功能：
 * </zh_tw>
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.FILE_CREATE_NEW_AND_MODE_ALL = exports.FILE_MODE_ALL = exports.joinPath = void 0;
var path = require("https://deno.land/std@0.204.0/path/mod.ts");
/**
    <en_us>en_us</en_us>
    <zh_cn>合并路径</zh_cn>
    <zh_tw>zh_tw</zh_tw>
    @see https://deno.land/std@0.204.0/path/mod.ts
*/
exports.joinPath = path.join;
var exists_ts_1 = require("https://deno.land/std@0.211.0/fs/exists.ts");
__createBinding(exports, exists_ts_1, "exists");
__createBinding(exports, exists_ts_1, "type");
__createBinding(exports, exists_ts_1, "ExistsOptions");
__createBinding(exports, exists_ts_1, "existsSync");
// eg: { SEP: "\\", SEP_PATTERN: /[\\/]+/ }
var separator_ts_1 = require("https://deno.land/std@0.211.0/path/separator.ts");
/** win: '\\'; others: '/' */
__createBinding(exports, separator_ts_1, "SEP");
/** eg: /[\\/]+/ */
__createBinding(exports, separator_ts_1, "SEP_PATTERN");
/**
 * <en_us>en_us</en_us>
 * <zh_cn>完整权限写入文件模式</zh_cn>
 * <zh_tw>zh_tw</zh_tw>
 */
exports.FILE_MODE_ALL = { mode: 511 };
/**
    <en_us>en_us</en_us>
    <zh_cn>完整权限新建文件模式</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
exports.FILE_CREATE_NEW_AND_MODE_ALL = { createNew: true, mode: 511 };
