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
 * 功能：
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.joinPath = void 0;
var path = __importStar(require("https://deno.land/std@0.204.0/path/mod.ts"));
exports.joinPath = path.join;
var exists_ts_1 = require("https://deno.land/std@0.211.0/fs/exists.ts");
__createBinding(exports, exists_ts_1, "exists");
__createBinding(exports, exists_ts_1, "existsSync");
__createBinding(exports, exists_ts_1, "type");
__createBinding(exports, exists_ts_1, "ExistsOptions");
// eg: { SEP: "\\", SEP_PATTERN: /[\\/]+/ }
var separator_ts_1 = require("https://deno.land/std@0.211.0/path/separator.ts");
__createBinding(exports, separator_ts_1, "SEP");
__createBinding(exports, separator_ts_1, "SEP_PATTERN");
