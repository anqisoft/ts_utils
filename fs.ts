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



import * as path from 'https://deno.land/std@0.204.0/path/mod.ts';

export const joinPath = path.join;

export { exists, existsSync, type ExistsOptions } from 'https://deno.land/std@0.211.0/fs/exists.ts';

// eg: { SEP: "\\", SEP_PATTERN: /[\\/]+/ }
export { SEP, SEP_PATTERN } from 'https://deno.land/std@0.211.0/path/separator.ts';
