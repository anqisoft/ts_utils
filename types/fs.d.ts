/**
    <en_us>en_us</en_us>
    <zh_cn>合并路径</zh_cn>
    <zh_tw>zh_tw</zh_tw>
    @see https://deno.land/std@0.204.0/path/mod.ts
*/
export declare const joinPath: any;
export { exists, type ExistsOptions, existsSync } from 'https://deno.land/std@0.211.0/fs/exists.ts';
export { 
/** win: '\\'; others: '/' */
SEP, 
/** eg: /[\\/]+/ */
SEP_PATTERN, } from 'https://deno.land/std@0.211.0/path/separator.ts';
/**
 * <en_us>en_us</en_us>
 * <zh_cn>完整权限写入文件模式</zh_cn>
 * <zh_tw>zh_tw</zh_tw>
 */
export declare const FILE_MODE_ALL: {
    mode: number;
};
/**
    <en_us>en_us</en_us>
    <zh_cn>完整权限新建文件模式</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export declare const FILE_CREATE_NEW_AND_MODE_ALL: {
    createNew: boolean;
    mode: number;
};
