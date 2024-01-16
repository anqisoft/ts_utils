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

import * as path from 'https://deno.land/std@0.204.0/path/mod.ts';

/**
    <en_us>en_us</en_us>
    <zh_cn>合并路径</zh_cn>
    <zh_tw>zh_tw</zh_tw>
    @see https://deno.land/std@0.204.0/path/mod.ts
*/
export const joinPath = path.join;

export { exists, type ExistsOptions, existsSync } from 'https://deno.land/std@0.211.0/fs/exists.ts';

// eg: { SEP: "\\", SEP_PATTERN: /[\\/]+/ }
export {
	/** win: '\\'; others: '/' */
	SEP,
	/** eg: /[\\/]+/ */
	SEP_PATTERN,
} from 'https://deno.land/std@0.211.0/path/separator.ts';

/**
 * <en_us>en_us</en_us>
 * <zh_cn>完整权限写入文件模式</zh_cn>
 * <zh_tw>zh_tw</zh_tw>
 */
export const FILE_MODE_ALL = { mode: 0o777 };

/**
    <en_us>en_us</en_us>
    <zh_cn>完整权限新建文件模式</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const FILE_CREATE_NEW_AND_MODE_ALL = { createNew: true, mode: 0o777 };
