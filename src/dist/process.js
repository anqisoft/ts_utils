"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * process.ts
 *
 * <en_us>
 * Creation: January 15, 2024 16:51:46
 * Function: Provide process processing related functions
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月15日 16:51:46
 * 功能：提供进程处理相关功能，统一deno与node的写法
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 16:51:46
 * 功能：提供進程處理相關功能
 * </zh_tw>
 */
exports.__esModule = true;
exports.getCurrentWorkingDirectory = exports.exitProcess = void 0;
/*
 * <en_us>exit process, call Deno.exit</en_us>
 * <zh_cn>退出进程，调用Deno.exit</zh_cn>
 * <zh_tw>退出進程，調用Deno.exit</zh_tw>
 * @see https://deno.land/api@v1.39.2?s=Deno.exit
 */
exports.exitProcess = Deno.exit;
/*
 * <en_us></en_us>
 * <zh_cn>获取当前活动目录</zh_cn>
 * <zh_tw></zh_tw>
 * @returns string <en_us>en_us</en_us><zh_cn>当前活动目录</zh_cn><zh_tw>zh_tw</zh_tw>
 * @see https://deno.land/api@v1.39.2?s=Deno.exit
 */
exports.getCurrentWorkingDirectory = Deno.cwd;
