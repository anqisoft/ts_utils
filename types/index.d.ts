/**
    <en_us>en_us</en_us>
    <zh_cn>回车</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export declare const CR = "\r";
/**
    <en_us>en_us</en_us>
    <zh_cn>换行</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export declare const LF = "\n";
/**
    <en_us>en_us</en_us>
    <zh_cn>回车换行符</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export declare const CRLF = "\r\n";
/**
    <en_us>en_us</en_us>
    <zh_cn>拆分专用分隔符，先把一系列特殊的字符串替换成这个，再用这个进一步拆分</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export declare const SEPARATOR_OF_SPLIT = "\0";
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
/**
 * <en_us>date correction value</en_us>
 * <zh_cn>日期修正值</zh_cn>
 * <zh_tw>日期修正值</zh_tw>
 */
export declare const DATE_OFFSET_GMT8: number;
/**
 * <en_us>Get the corrected date</en_us>
 * <zh_cn>获取修正后的日期</zh_cn>
 * <zh_tw>取得修正後的日期</zh_tw>
 *
 * @returns
 * <en_us>the corrected date</en_us>
 * <zh_cn>修正后的日期</zh_cn>
 * <zh_tw>修正後的日期</zh_tw>
 */
export declare function getFixedDate(): Date;
/**
 * <en_us>Get the corrected date</en_us>
 * <zh_cn>获取修正后的日期</zh_cn>
 * <zh_tw>取得修正後的日期</zh_tw>
 *
 * @returns
 * <en_us>the corrected date</en_us>
 * <zh_cn>修正后的日期</zh_cn>
 * <zh_tw>修正後的日期</zh_tw>
 */
export declare function getFilenameTimestampPostfix(): string;
declare global {
    interface Date {
        /**
         * <en_us>en_us</en_us><zh_cn>获取增加中国GMT+8时区修正值的日期</zh_cn><zh_tw>zh_tw</zh_tw>
         * @returns {Date} 加了中国GMT+8时区修正值的日期
         */
        _addGmt8(): Date;
        /**
         * <en_us>en_us</en_us><zh_cn>转为文件名时间戳后缀字符串</zh_cn><zh_tw>zh_tw</zh_tw>
         * @returns {string} 文件名时间戳后缀
         */
        _toFilenameTimestampPostfix(): string;
        /**
         * <en_us>en_us</en_us><zh_cn>增加中国GMT+8时区修正值，再转文件名时间戳后缀字符串</zh_cn><zh_tw>zh_tw</zh_tw>
         * @returns {string} 加了中国GMT+8时区修正值后，所转的文件名时间戳后缀
         */
        _toGmt8FilenameTimestampPostfix(): string;
    }
}
/**
 * <en_us>Interface: synchronization method</en_us>
 * <zh_cn>接口：同步方法</zh_cn>
 * <zh_tw>介面：同步方法</zh_tw>
 */
export interface SyncFunc extends Function {
    (...args: unknown[]): void;
}
/**
 * <en_us>Interface: asynchronous method</en_us>
 * <zh_cn>接口：异步方法</zh_cn>
 * <zh_tw>介面：异步方法</zh_tw>
 */
export interface AsyncFunc extends Function {
    async(...args: unknown[]): void;
}
/**
 * <en_us>Guard: Asynchronous method</en_us>
 * <zh_cn>守卫：异步方法</zh_cn>
 * <zh_tw>守衛：异步方法</zh_tw>
 * @param func {unknown} <en_us>en_us</en_us><zh_cn>需检测是否为异步方法的方法</zh_cn><zh_tw>zh_tw</zh_tw>
 * @returns {boolean} <en_us>en_us</en_us><zh_cn>检测结果，true表示该方法为异步方法，false表示该方法为同步方法</zh_cn><zh_tw>zh_tw</zh_tw>
 */
export declare function isAsyncFunc(func: unknown): func is AsyncFunc;
/**
 * <en_us>Guard: synchronization method</en_us>
 * <zh_cn>守卫：同步方法</zh_cn>
 * <zh_tw>守衛：同步方法</zh_tw>
 * @param func {unknown} <en_us>en_us</en_us><zh_cn>需检测是否为同步方法的方法</zh_cn><zh_tw>zh_tw</zh_tw>
 * @returns {boolean} <en_us>en_us</en_us><zh_cn>检测结果，true表示该方法为同步方法，false表示该方法为异步方法</zh_cn><zh_tw>zh_tw</zh_tw>
 */
export declare function isSyncFunc(func: unknown): func is SyncFunc;
/**
 * <en_us>internationalization</en_us>
 * <zh_cn>可国际化</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 */
export type I18N_LANG_KIND = 'en_us' | 'zh_cn' | 'zh_tw';
/**
 * <en_us>internationalization</en_us>
 * <zh_cn>检测字符串是否为所支持的国际化语言类型</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 *
 * @param lang {string} <en_us>en_us</en_us><zh_cn>需检测是否为所支持的国际化语言的字符串</zh_cn><zh_tw>zh_tw</zh_tw>
 * @returns {boolean} <en_us>en_us</en_us><zh_cn>是否为所支持的国际化语言</zh_cn><zh_tw>zh_tw</zh_tw>
 */
export declare function isI18nLangKind(lang: string): lang is I18N_LANG_KIND;
/**
 * <en_us>internationalization</en_us>
 * <zh_cn>可国际化</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 */
export declare const I18N_LANG_ARRAY: string[];
/**
 * <en_us>American English Start Label</en_us>
 * <zh_cn>美式英语起始标记</zh_cn>
 * <zh_tw>美式英語起始標記</zh_tw>
 */
export declare const HTML_TAG_BEGIN__EN_US = "<en_us>";
/**
 * <en_us>American English ending mark</en_us>
 * <zh_cn>美式英语结束标记</zh_cn>
 * <zh_tw>美式英語結束標記</zh_tw>
 */
export declare const HTML_TAG_END__EN_US = "</en_us>";
/**
 * <en_us>Simplified Chinese starting label</en_us>
 * <zh_cn>简体中文起始标记</zh_cn>
 * <zh_tw>簡體中文起始標記</zh_tw>
 */
export declare const HTML_TAG_BEGIN__ZH_CN = "<zh_cn>";
/**
 * <en_us>Simplified Chinese end mark</en_us>
 * <zh_cn>简体中文结束标记</zh_cn>
 * <zh_tw>簡體中文結束標記</zh_tw>
 */
export declare const HTML_TAG_END__ZH_CN = "</zh_cn>";
/**
 * <en_us>Traditional Chinese starting label</en_us>
 * <zh_cn>繁体中文起始标记</zh_cn>
 * <zh_tw>繁體中文起始標記</zh_tw>
 */
export declare const HTML_TAG_BEGIN__ZH_TW = "<zh_tw>";
/**
 * <en_us>Traditional Chinese end mark</en_us>
 * <zh_cn>繁体中文结束标记</zh_cn>
 * <zh_tw>繁體中文結束標記</zh_tw>
 */
export declare const HTML_TAG_END__ZH_TW = "</zh_tw>";
/**
 * <en_us>internationalization</en_us>
 * <zh_cn>可国际化</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 */
export interface I18nable {
    en_us: string;
    zh_cn: string;
    zh_tw: string;
}
/**
 * <en_us>internationalization</en_us>
 * <zh_cn>检测字符串是否为所支持的国际化语言类型</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 *
 * @param lang {string} <en_us>en_us</en_us><zh_cn>需检测是否为所支持的国际化语言的字符串</zh_cn><zh_tw>zh_tw</zh_tw>
 * @returns {boolean} <en_us>en_us</en_us><zh_cn>是否为所支持的国际化语言</zh_cn><zh_tw>zh_tw</zh_tw>
 */
export declare function isI18nable(obj: object): obj is I18nable;
/**
 * <en_us>mark: internationalization</en_us>
 * <zh_cn>标记：国际化</zh_cn>
 * <zh_tw>標記：國際化</zh_tw>
 */
export declare enum I18nFlag {
    none = 0,
    en_us = 1,
    zh_cn = 2,
    en_us_and_zh_cn = 3,
    zh_tw = 4,
    en_us_and_zh_tw = 5,
    zh_cn_and_zh_tw = 6,
    all = 7
}
/**
 * <en_us></en_us>
 * <zh_cn>开始标记长度</zh_cn>
 * <zh_tw></zh_tw>
 */
export declare const I18N_HTML_BEGIN_TAG_LENGTH = 7;
/**
 * <en_us></en_us>
 * <zh_cn>结束标记长度</zh_cn>
 * <zh_tw></zh_tw>
 */
export declare const I18N_HTML_END_TAG_LENGTH: number;
/**
 * <en_us>Advanced rounding</en_us>
 * <zh_cn>高级四舍五入</zh_cn>
 * <zh_tw>高級四捨五入</zh_tw>
 *
 * @param num {number}
 * <en_us>raw number</en_us>
 * <zh_cn>原始数字</zh_cn>
 * <zh_tw>原始數字</zh_tw>
 *
 * @param digit {number}
 * <en_us>Number of digits</en_us>
 * <zh_cn>位数</zh_cn>
 * <zh_tw>位數</zh_tw>
 *
 * @returns {number}
 * <en_us>Round results</en_us>
 * <zh_cn>四舍五入结果</zh_cn>
 * <zh_tw>四捨五入結果</zh_tw>
 */
export declare const roundWithDigit: (num: number, digit: number) => number;
declare global {
    interface Number {
        /**
         * <en_us>en_us</en_us><zh_cn>带小数位进行四舍五入</zh_cn><zh_tw>zh_tw</zh_tw>
         * @param digit {number} <en_us>en_us</en_us><zh_cn>小数位数</zh_cn><zh_tw>zh_tw</zh_tw>
         * @returns {number} 带小数位四舍五入结果
         */
        _roundWithDigit(digit: number): number;
    }
}
export { 
/**
    <en_us>en_us</en_us>
    <zh_cn>合并路径</zh_cn>
    <zh_tw>zh_tw</zh_tw>
    @see https://deno.land/std@0.204.0/path/mod.ts
*/
join as joinPath, } from 'https://deno.land/std@0.204.0/path/mod.ts';

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
export { type AnyConstructor, // Any constructor
type ArrayLikeArg, // array-like object (Array, Uint8Array, NodeList, etc.) that is not a string
assert, assertAlmostEquals, assertArrayIncludes, assertEquals, assertExists, assertFalse, assertGreater, assertGreaterOrEqual, assertInstanceOf, AssertionError, assertIsError, assertLess, assertLessOrEqual, assertMatch, assertNotEquals, assertNotInstanceOf, assertNotMatch, assertNotStrictEquals, assertObjectMatch, assertRejects, assertStrictEquals, assertStringIncludes, assertThrows, equal, fail, type Falsy, // Assertion condition for assertFalse.
type GetConstructorType, // Gets constructor type
unimplemented, unreachable, } from 'https://deno.land/std@0.211.0/assert/mod.ts';
export declare const NotFoundError: typeof Deno.errors.NotFound;
export declare const PermissionDeniedError: typeof Deno.errors.PermissionDenied;
export declare const ConnectionRefusedError: typeof Deno.errors.ConnectionRefused;
export declare const ConnectionResetError: typeof Deno.errors.ConnectionReset;
export declare const ConnectionAbortedError: typeof Deno.errors.ConnectionAborted;
export declare const NotConnectedError: typeof Deno.errors.NotConnected;
export declare const AddrInUseError: typeof Deno.errors.AddrInUse;
export declare const AddrNotAvailableError: typeof Deno.errors.AddrNotAvailable;
export declare const BrokenPipeError: typeof Deno.errors.BrokenPipe;
export declare const AlreadyExistsError: typeof Deno.errors.AlreadyExists;
export declare const InvalidDataError: typeof Deno.errors.InvalidData;
export declare const TimedOutError: typeof Deno.errors.TimedOut;
export declare const InterruptedError: typeof Deno.errors.Interrupted;
export declare const WouldBlockError: typeof Deno.errors.WouldBlock;
export declare const WriteZeroError: typeof Deno.errors.WriteZero;
export declare const UnexpectedEofError: typeof Deno.errors.UnexpectedEof;
export declare const BadResourceError: typeof Deno.errors.BadResource;
export declare const HttpError: typeof Deno.errors.Http;
export declare const BusyError: typeof Deno.errors.Busy;
export declare const NotSupportedError: typeof Deno.errors.NotSupported;
export declare const FilesystemLoopError: typeof Deno.errors.FilesystemLoop;
export declare const IsADirectoryError: typeof Deno.errors.IsADirectory;
export declare const NetworkUnreachableError: typeof Deno.errors.NetworkUnreachable;
export declare const NotADirectoryError: typeof Deno.errors.NotADirectory;
export type MemoryUsage = Deno.MemoryUsage;
export type NetworkInterfaceInfo = Deno.NetworkInterfaceInfo;
export type SystemMemoryInfo = Deno.SystemMemoryInfo;
export type PermissionOptions = Deno.PermissionOptions;
export type PermissionOptionsObject = Deno.PermissionOptionsObject;
export type TestContext = Deno.TestContext;
export type TestStepDefinition = Deno.TestStepDefinition;
export type TestDefinition = Deno.TestDefinition;
export type BenchContext = Deno.BenchContext;
export type BenchDefinition = Deno.BenchDefinition;
export type Env = Deno.Env;
export type Seeker = Deno.Seeker;
export type SeekerSync = Deno.SeekerSync;
export type SetRawOptions = Deno.SetRawOptions;
export type OpenOptions = Deno.OpenOptions;
export type ReadFileOptions = Deno.ReadFileOptions;
export type MkdirOptions = Deno.MkdirOptions;
export type MakeTempOptions = Deno.MakeTempOptions;
export type RemoveOptions = Deno.RemoveOptions;
export type FileInfo = Deno.FileInfo;
export type DirEntry = Deno.DirEntry;
export type WriteFileOptions = Deno.WriteFileOptions;
export type FsEventFlag = Deno.FsEventFlag;
export type FsEvent = Deno.FsEvent;
export type FsWatcher = Deno.FsWatcher;
export type Signal = Deno.Signal;
export type CommandOptions = Deno.CommandOptions;
export type CommandStatus = Deno.CommandStatus;
export type CommandOutput = Deno.CommandOutput;
export type InspectOptions = Deno.InspectOptions;
export type PermissionName = Deno.PermissionName;
export type PermissionState = Deno.PermissionState;
export type RunPermissionDescriptor = Deno.RunPermissionDescriptor;
export type ReadPermissionDescriptor = Deno.ReadPermissionDescriptor;
export type WritePermissionDescriptor = Deno.WritePermissionDescriptor;
export type NetPermissionDescriptor = Deno.NetPermissionDescriptor;
export type EnvPermissionDescriptor = Deno.EnvPermissionDescriptor;
export type SysPermissionDescriptor = Deno.SysPermissionDescriptor;
export type FfiPermissionDescriptor = Deno.FfiPermissionDescriptor;
export type HrtimePermissionDescriptor = Deno.HrtimePermissionDescriptor;
export type PermissionDescriptor = Deno.PermissionDescriptor;
export type PermissionStatusEventMap = Deno.PermissionStatusEventMap;
export type SymlinkOptions = Deno.SymlinkOptions;
export type RequestEvent = Deno.RequestEvent;
export type HttpConn = Deno.HttpConn;
export type WebSocketUpgrade = Deno.WebSocketUpgrade;
export type UpgradeWebSocketOptions = Deno.UpgradeWebSocketOptions;
export type RecordType = Deno.RecordType;
export type ResolveDnsOptions = Deno.ResolveDnsOptions;
export type CAARecord = Deno.CAARecord;
export type MXRecord = Deno.MXRecord;
export type NAPTRRecord = Deno.NAPTRRecord;
export type SOARecord = Deno.SOARecord;
export type SRVRecord = Deno.SRVRecord;
export type ServeHandlerInfo = Deno.ServeHandlerInfo;
export type ServeHandler = Deno.ServeHandler;
export type ServeOptions = Deno.ServeOptions;
export type ServeTlsOptions = Deno.ServeTlsOptions;
export type ServeInit = Deno.ServeInit;
export type ServeUnixOptions = Deno.ServeUnixOptions;
export type ServeUnixHandlerInfo = Deno.ServeUnixHandlerInfo;
export type ServeUnixHandler = Deno.ServeUnixHandler;
export type ServeUnixInit = Deno.ServeUnixInit;
export type HttpServer = Deno.HttpServer;
export type Server = Deno.HttpServer;
export declare const PROCESS_ID: number, PROCESS_PARENT_ID: number, memoryUsage: typeof Deno.memoryUsage, hostname: typeof Deno.hostname, loadavg: typeof Deno.loadavg, networkInterfaces: typeof Deno.networkInterfaces, systemMemoryInfo: typeof Deno.systemMemoryInfo, noColor: boolean, osRelease: typeof Deno.osRelease, osUptime: typeof Deno.osUptime, test: Deno.DenoTest, bench: typeof Deno.bench, exitProcess: typeof Deno.exit, env: Deno.Env, execPath: typeof Deno.execPath, setCurrentWorkingDirectory: typeof Deno.chdir, getCurrentWorkingDirectory: typeof Deno.cwd, link: typeof Deno.link, linkSync: typeof Deno.linkSync, SeekMode: typeof Deno.SeekMode, open: typeof Deno.open, openSync: typeof Deno.openSync, create: typeof Deno.create, createSync: typeof Deno.createSync, read: typeof Deno.read, readSync: typeof Deno.readSync, write: typeof Deno.write, writeSync: typeof Deno.writeSync, seek: typeof Deno.seek, seekSync: typeof Deno.seekSync, fsync: typeof Deno.fsync, fsyncSync: typeof Deno.fsyncSync, fdatasync: typeof Deno.fdatasync, fdatasyncSync: typeof Deno.fdatasyncSync, close: typeof Deno.close, FsFile: typeof Deno.FsFile, consoleSize: typeof Deno.consoleSize, stdin: Deno.Reader & Deno.ReaderSync & Deno.Closer & {
    readonly rid: number;
    readonly readable: ReadableStream<Uint8Array>;
    setRaw(mode: boolean, options?: Deno.SetRawOptions | undefined): void;
}, stdout: Deno.Writer & Deno.WriterSync & Deno.Closer & {
    readonly rid: number;
    readonly writable: WritableStream<Uint8Array>;
}, stderr: Deno.Writer & Deno.WriterSync & Deno.Closer & {
    readonly rid: number;
    readonly writable: WritableStream<Uint8Array>;
}, isatty: typeof Deno.isatty, mkdir: typeof Deno.mkdir, mkdirSync: typeof Deno.mkdirSync, makeTempDir: typeof Deno.makeTempDir, makeTempDirSync: typeof Deno.makeTempDirSync, makeTempFile: typeof Deno.makeTempFile, makeTempFileSync: typeof Deno.makeTempFileSync, chmod: typeof Deno.chmod, chmodSync: typeof Deno.chmodSync, chown: typeof Deno.chown, chownSync: typeof Deno.chownSync, remove: typeof Deno.remove, removeSync: typeof Deno.removeSync, renameSync: typeof Deno.renameSync, rename: typeof Deno.rename, readTextFile: typeof Deno.readTextFile, readTextFileSync: typeof Deno.readTextFileSync, readFile: typeof Deno.readFile, readFileSync: typeof Deno.readFileSync, realPath: typeof Deno.realPath, realPathSync: typeof Deno.realPathSync, readDir: typeof Deno.readDir, readDirSync: typeof Deno.readDirSync, copyFile: typeof Deno.copyFile, copyFileSync: typeof Deno.copyFileSync, readLink: typeof Deno.readLink, readLinkSync: typeof Deno.readLinkSync, lstat: typeof Deno.lstat, lstatSync: typeof Deno.lstatSync, stat: typeof Deno.stat, statSync: typeof Deno.statSync, writeFile: typeof Deno.writeFile, writeFileSync: typeof Deno.writeFileSync, writeTextFile: typeof Deno.writeTextFile, writeTextFileSync: typeof Deno.writeTextFileSync, truncate: typeof Deno.truncate, truncateSync: typeof Deno.truncateSync, resources: typeof Deno.resources, watchFs: typeof Deno.watchFs, addSignalListener: typeof Deno.addSignalListener, removeSignalListener: typeof Deno.removeSignalListener, Command: typeof Deno.Command, ChildProcess: typeof Deno.ChildProcess, inspect: typeof Deno.inspect, PermissionStatus: typeof Deno.PermissionStatus, Permissions: typeof Deno.Permissions, permissions: Deno.Permissions, build: {
    target: string;
    arch: "x86_64" | "aarch64";
    os: "darwin" | "linux" | "android" | "windows" | "freebsd" | "netbsd" | "aix" | "solaris" | "illumos";
    vendor: string;
    env?: string | undefined;
}, version: {
    deno: string;
    v8: string;
    typescript: string;
}, COMMAND_LINE_ARGS: string[], mainModule: string, symlink: typeof Deno.symlink, symlinkSync: typeof Deno.symlinkSync, ftruncate: typeof Deno.ftruncate, ftruncateSync: typeof Deno.ftruncateSync, futimeSync: typeof Deno.futimeSync, futime: typeof Deno.futime, fstat: typeof Deno.fstat, fstatSync: typeof Deno.fstatSync, utimeSync: typeof Deno.utimeSync, utime: typeof Deno.utime, serveHttp: typeof Deno.serveHttp, upgradeWebSocket: typeof Deno.upgradeWebSocket, killProcess: typeof Deno.kill, resolveDns: typeof Deno.resolveDns, refTimer: typeof Deno.refTimer, unrefTimer: typeof Deno.unrefTimer, UserId: typeof Deno.uid, GroupId: typeof Deno.gid;
