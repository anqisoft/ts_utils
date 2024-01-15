"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * index.ts
 *
 * <en_us>
  * Creation: January 15, 2024 11:38:05
  * Function: Provide the most basic and common feature of TypeScript code libraries, which is paired with the javascript version of js_utils library, etc.
  * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月15日 11:38:05
 * 功能：提供typescript各代码库最基础且共用的功能，与javascript版的js_utils库对等
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 11:38:05
 * 功能：提供typescript各代碼庫最基礎且共用的功能，與javascript版的js_utils庫對等
 * </zh_tw>
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(require("./i18n.ts"), exports);
__exportStar(require("./process.ts"), exports);
__exportStar(require("./args.ts"), exports);
__exportStar(require("./fs.ts"), exports);
__exportStar(require("./chars.ts"), exports);
__exportStar(require("./date.ts"), exports);
__exportStar(require("./function.ts"), exports);
var mod_ts_1 = require("https://deno.land/std@0.211.0/assert/mod.ts");
__createBinding(exports, mod_ts_1, "AssertionError");
__createBinding(exports, mod_ts_1, "assert");
__createBinding(exports, mod_ts_1, "assertAlmostEquals");
__createBinding(exports, mod_ts_1, "assertArrayIncludes");
__createBinding(exports, mod_ts_1, "assertEquals");
__createBinding(exports, mod_ts_1, "assertExists");
__createBinding(exports, mod_ts_1, "assertFalse");
__createBinding(exports, mod_ts_1, "assertGreater");
__createBinding(exports, mod_ts_1, "assertGreaterOrEqual");
__createBinding(exports, mod_ts_1, "assertInstanceOf");
__createBinding(exports, mod_ts_1, "assertIsError");
__createBinding(exports, mod_ts_1, "assertLess");
__createBinding(exports, mod_ts_1, "assertLessOrEqual");
__createBinding(exports, mod_ts_1, "assertMatch");
__createBinding(exports, mod_ts_1, "assertNotEquals");
__createBinding(exports, mod_ts_1, "assertNotInstanceOf");
__createBinding(exports, mod_ts_1, "assertNotMatch");
__createBinding(exports, mod_ts_1, "assertNotStrictEquals");
__createBinding(exports, mod_ts_1, "assertObjectMatch");
__createBinding(exports, mod_ts_1, "assertRejects");
__createBinding(exports, mod_ts_1, "assertStrictEquals");
__createBinding(exports, mod_ts_1, "assertStringIncludes");
__createBinding(exports, mod_ts_1, "assertThrows");
__createBinding(exports, mod_ts_1, "equal");
__createBinding(exports, mod_ts_1, "fail");
__createBinding(exports, mod_ts_1, "unimplemented");
__createBinding(exports, mod_ts_1, "unreachable");
__createBinding(exports, mod_ts_1, "type");
__createBinding(exports, mod_ts_1, "AnyConstructor");
__createBinding(exports, mod_ts_1, "type");
__createBinding(exports, mod_ts_1, "ArrayLikeArg");
__createBinding(exports, mod_ts_1, "type");
__createBinding(exports, mod_ts_1, "Falsy");
__createBinding(exports, mod_ts_1, "type");
__createBinding(exports, mod_ts_1, "GetConstructorType");
