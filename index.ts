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

/* ================================================================================================
<en_us></en_us>
<zh_cn>字符：提供特殊字符，如换行符、替换分隔符等</zh_cn>
<zh_tw></zh_tw>
================================================================================================ */
/**
    <en_us>en_us</en_us>
    <zh_cn>回车</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const CR = '\r';

/**
    <en_us>en_us</en_us>
    <zh_cn>换行</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const LF = '\n';

/**
    <en_us>en_us</en_us>
    <zh_cn>回车换行符</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const CRLF = '\r\n';

/**
    <en_us>en_us</en_us>
    <zh_cn>拆分专用分隔符，先把一系列特殊的字符串替换成这个，再用这个进一步拆分</zh_cn>
    <zh_tw>zh_tw</zh_tw>
*/
export const SEPARATOR_OF_SPLIT = '\0';

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

String.prototype._replaceToSplitSeparator = function (from: string | RegExp): string {
	return this.replace(from, SEPARATOR_OF_SPLIT);
};

/* ================================================================================================
<en_us></en_us>
<zh_cn>日期，如提供中国时区GMT+8相关方法</zh_cn>
<zh_tw></zh_tw>
================================================================================================ */
/**
 * <en_us>date correction value</en_us>
 * <zh_cn>日期修正值</zh_cn>
 * <zh_tw>日期修正值</zh_tw>
 */
export const DATE_OFFSET_GMT8 = 1000 * 60 * 60 * 8;

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
export function getFixedDate(): Date {
	return new Date(new Date().getTime() + DATE_OFFSET_GMT8);
}

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
export function getFilenameTimestampPostfix(): string {
	// return getFixedDate().toJSON().replace('T', ' ').replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '');
	return '_'.concat(
		getFixedDate().toJSON().replace(/-/g, '').replace(/:/g, '').replace('T', '_').split('.')[0],
	);
}

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

Date.prototype._addGmt8 = function (): Date {
	return new Date(this.getTime() + DATE_OFFSET_GMT8);
};

Date.prototype._toFilenameTimestampPostfix = function (): string {
	return '_'.concat(
		this.toJSON().replace(/-/g, '').replace(/:/g, '').replace('T', '_').split('.')[0],
	);
};

Date.prototype._toGmt8FilenameTimestampPostfix = function (): string {
	return '_'.concat(
		(new Date(this.getTime() + DATE_OFFSET_GMT8))
			.toJSON()
			.replace(/-/g, '').replace(/:/g, '')
			.replace('T', '_').split('.')[0],
	);
};

/* ================================================================================================
<en_us></en_us>
<zh_cn>方法辅助：提供方法的辅助方法，如同步方法、异步方法接口及相应守卫</zh_cn>
<zh_tw></zh_tw>
================================================================================================ */
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
export function isAsyncFunc(func: unknown): func is AsyncFunc {
	return func instanceof Function && (func instanceof Promise);
}

/**
 * <en_us>Guard: synchronization method</en_us>
 * <zh_cn>守卫：同步方法</zh_cn>
 * <zh_tw>守衛：同步方法</zh_tw>
 * @param func {unknown} <en_us>en_us</en_us><zh_cn>需检测是否为同步方法的方法</zh_cn><zh_tw>zh_tw</zh_tw>
 * @returns {boolean} <en_us>en_us</en_us><zh_cn>检测结果，true表示该方法为同步方法，false表示该方法为异步方法</zh_cn><zh_tw>zh_tw</zh_tw>
 */
export function isSyncFunc(func: unknown): func is SyncFunc {
	return func instanceof Function && !(func instanceof Promise);
}

/* ================================================================================================
<en_us></en_us>
<zh_cn>国际化：提供国际化支持基础类型、标记等</zh_cn>
<zh_tw></zh_tw>
================================================================================================ */

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
export function isI18nLangKind(lang: string): lang is I18N_LANG_KIND {
	return ['en_us', 'zh_cn', 'zh_tw'].indexOf(lang) > -1;
}

/**
 * <en_us>internationalization</en_us>
 * <zh_cn>可国际化</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 */
export const I18N_LANG_ARRAY = ['en_us', 'zh_cn', 'zh_tw'];

/**
 * <en_us>American English Start Label</en_us>
 * <zh_cn>美式英语起始标记</zh_cn>
 * <zh_tw>美式英語起始標記</zh_tw>
 */
export const HTML_TAG_BEGIN__EN_US = '<en_us\>';
/**
 * <en_us>American English ending mark</en_us>
 * <zh_cn>美式英语结束标记</zh_cn>
 * <zh_tw>美式英語結束標記</zh_tw>
 */
export const HTML_TAG_END__EN_US = '</en_us\>';

/**
 * <en_us>Simplified Chinese starting label</en_us>
 * <zh_cn>简体中文起始标记</zh_cn>
 * <zh_tw>簡體中文起始標記</zh_tw>
 */
export const HTML_TAG_BEGIN__ZH_CN = '<zh_cn\>';
/**
 * <en_us>Simplified Chinese end mark</en_us>
 * <zh_cn>简体中文结束标记</zh_cn>
 * <zh_tw>簡體中文結束標記</zh_tw>
 */
export const HTML_TAG_END__ZH_CN = '</zh_cn\>';

/**
 * <en_us>Traditional Chinese starting label</en_us>
 * <zh_cn>繁体中文起始标记</zh_cn>
 * <zh_tw>繁體中文起始標記</zh_tw>
 */
export const HTML_TAG_BEGIN__ZH_TW = '<zh_tw\>';
/**
 * <en_us>Traditional Chinese end mark</en_us>
 * <zh_cn>繁体中文结束标记</zh_cn>
 * <zh_tw>繁體中文結束標記</zh_tw>
 */
export const HTML_TAG_END__ZH_TW = '</zh_tw\>';

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
export function isI18nable(obj: object): obj is I18nable {
	return 'en_us' in obj && 'zh_cn' in obj && 'zh_tw' in obj;
}

/**
 * <en_us>mark: internationalization</en_us>
 * <zh_cn>标记：国际化</zh_cn>
 * <zh_tw>標記：國際化</zh_tw>
 */
export enum I18nFlag {
	/*
	 * <en_us>None</en_us>
	 * <zh_cn>无</zh_cn>
	 * <zh_tw>無</zh_tw>
	 */
	none,
	/*
	 * <en_us>Only American English</en_us>
	 * <zh_cn>仅显示美式英语</zh_cn>
	 * <zh_tw>僅顯示美式英語</zh_tw>
	 */
	en_us = 1,
	/*
	 * <en_us>only show simplified Chinese</en_us>
	 * <zh_cn>仅显示简体中文</zh_cn>
	 * <zh_tw>僅顯示簡體中文</zh_tw>
	 */
	zh_cn = 2,
	/*
	 * <en_us>English and simplified Chinese</en_us>
	 * <zh_cn>英语与简体中文</zh_cn>
	 * <zh_tw>英語與簡體中文</zh_tw>
	 */
	en_us_and_zh_cn = 3,
	/*
	 * <en_us>only show traditional Chinese</en_us>
	 * <zh_cn>仅显示繁体中文</zh_cn>
	 * <zh_tw>僅顯示繁體中文</zh_tw>
	 */
	zh_tw = 4,
	/*
	 * <en_us>English and traditional Chinese</en_us>
	 * <zh_cn>英语与繁体中文</zh_cn>
	 * <zh_tw>英語與繁體中文</zh_tw>
	 */
	en_us_and_zh_tw = 5,
	/*
	 * <en_us>Simplified Chinese</en_us>
	 * <zh_cn>简繁体中文</zh_cn>
	 * <zh_tw>簡繁體中文</zh_tw>
	 */
	zh_cn_and_zh_tw = 6,
	/*
	 * <en_us>All</en_us>
	 * <zh_cn>全部</zh_cn>
	 * <zh_tw>全部</zh_tw>
	 */
	all = 7,
}

/**
 * <en_us></en_us>
 * <zh_cn>开始标记长度</zh_cn>
 * <zh_tw></zh_tw>
 */
export const I18N_HTML_BEGIN_TAG_LENGTH = 7;

/**
 * <en_us></en_us>
 * <zh_cn>结束标记长度</zh_cn>
 * <zh_tw></zh_tw>
 */
export const I18N_HTML_END_TAG_LENGTH = I18N_HTML_BEGIN_TAG_LENGTH + 1;

/* ================================================================================================
<en_us></en_us>
<zh_cn>数字类型辅助</zh_cn>
<zh_tw></zh_tw>
================================================================================================ */
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
export const roundWithDigit = (num: number, digit: number) => parseFloat(num.toFixed(digit));

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

Number.prototype._roundWithDigit = function (digit: number): number {
	return parseFloat(this.toFixed(digit));
};

/* ================================================================================================
<en_us></en_us>
<zh_cn>文件处理，统一deno与node</zh_cn>
<zh_tw></zh_tw>
================================================================================================ */
export {
	/**
        <en_us>en_us</en_us>
        <zh_cn>合并路径</zh_cn>
        <zh_tw>zh_tw</zh_tw>
        @see https://deno.land/std@0.204.0/path/mod.ts
    */
	join as joinPath,
} from 'https://deno.land/std@0.204.0/path/mod.ts';

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

/* ================================================================================================
<en_us></en_us>
<zh_cn>调试</zh_cn>
<zh_tw></zh_tw>
================================================================================================ */
export {
	type AnyConstructor, // Any constructor
	type ArrayLikeArg, // array-like object (Array, Uint8Array, NodeList, etc.) that is not a string
	assert,
	assertAlmostEquals,
	assertArrayIncludes,
	assertEquals,
	assertExists,
	assertFalse,
	assertGreater,
	assertGreaterOrEqual,
	assertInstanceOf,
	AssertionError,
	assertIsError,
	assertLess,
	assertLessOrEqual,
	assertMatch,
	assertNotEquals,
	assertNotInstanceOf,
	assertNotMatch,
	assertNotStrictEquals,
	assertObjectMatch,
	assertRejects,
	assertStrictEquals,
	assertStringIncludes,
	assertThrows,
	equal,
	fail,
	type Falsy, // Assertion condition for assertFalse.
	type GetConstructorType, // Gets constructor type
	unimplemented,
	unreachable,
} from 'https://deno.land/std@0.211.0/assert/mod.ts';

/* ================================================================================================
<en_us>Provide process processing related functions </en_us>
<zh_cn>提供进程处理相关功能，统一deno与node的写法，目前从lib.deno.ns.d.ts获取相关项，再给少数项取别名 </zh_cn>
<zh_tw>提供進程處理相關功能</zh_tw>
================================================================================================ */
export const NotFoundError = Deno.errors.NotFound;
export const PermissionDeniedError = Deno.errors.PermissionDenied;
export const ConnectionRefusedError = Deno.errors.ConnectionRefused;
export const ConnectionResetError = Deno.errors.ConnectionReset;
export const ConnectionAbortedError = Deno.errors.ConnectionAborted;
export const NotConnectedError = Deno.errors.NotConnected;
export const AddrInUseError = Deno.errors.AddrInUse;
export const AddrNotAvailableError = Deno.errors.AddrNotAvailable;
export const BrokenPipeError = Deno.errors.BrokenPipe;
export const AlreadyExistsError = Deno.errors.AlreadyExists;
export const InvalidDataError = Deno.errors.InvalidData;
export const TimedOutError = Deno.errors.TimedOut;
export const InterruptedError = Deno.errors.Interrupted;
export const WouldBlockError = Deno.errors.WouldBlock;
export const WriteZeroError = Deno.errors.WriteZero;
export const UnexpectedEofError = Deno.errors.UnexpectedEof;
export const BadResourceError = Deno.errors.BadResource;
export const HttpError = Deno.errors.Http;
export const BusyError = Deno.errors.Busy;
export const NotSupportedError = Deno.errors.NotSupported;
export const FilesystemLoopError = Deno.errors.FilesystemLoop;
export const IsADirectoryError = Deno.errors.IsADirectory;
export const NetworkUnreachableError = Deno.errors.NetworkUnreachable;
export const NotADirectoryError = Deno.errors.NotADirectory;

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
// export type Reader                           = Deno.Reader ;
// export type ReaderSync                       = Deno.ReaderSync ;
// export type Writer                           = Deno.Writer ;
// export type WriterSync                       = Deno.WriterSync ;
// export type Closer                           = Deno.Closer ;
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
// export type OpMetrics                        = Deno.OpMetrics ;
// export type Metrics                          = Deno.Metrics ;
export type FsEventFlag = Deno.FsEventFlag;
export type FsEvent = Deno.FsEvent;
export type FsWatcher = Deno.FsWatcher;
// export type RunOptions                       = Deno.RunOptions ;
// export type ProcessStatus                    = Deno.ProcessStatus ;
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

export const {
	/**
	 * 	<en_us>en_us</en_us>
	 * 	<zh_cn>进程id</zh_cn>
	 * 	<zh_tw>zh_tw</zh_tw>
	 */
	pid: PROCESS_ID,

	/**
	 * 	<en_us>en_us</en_us>
	 * 	<zh_cn>父进程id</zh_cn>
	 * 	<zh_tw>zh_tw</zh_tw>
	 */
	ppid: PROCESS_PARENT_ID,

	memoryUsage,
	hostname,
	loadavg,
	networkInterfaces,
	systemMemoryInfo,
	noColor,
	osRelease,
	osUptime,
	test,
	bench,

	/**
	 * <en_us>exit process, call Deno.exit</en_us>
	 * <zh_cn>退出进程，调用Deno.exit</zh_cn>
	 * <zh_tw>退出進程，調用Deno.exit</zh_tw>
	 * @see https://deno.land/api@v1.39.2?s=Deno.exit
	 */
	exit: exitProcess,

	env,
	execPath,

	/**
	 * <en_us></en_us>
	 * <zh_cn>设置当前活动目录</zh_cn>
	 * <zh_tw></zh_tw>
	 */
	chdir: setCurrentWorkingDirectory,

	/**
	 * <en_us></en_us>
	 * <zh_cn>获取当前活动目录</zh_cn>
	 * <zh_tw></zh_tw>
	 * @returns {string} <en_us>en_us</en_us><zh_cn>当前活动目录</zh_cn><zh_tw>zh_tw</zh_tw>
	 */
	cwd: getCurrentWorkingDirectory,
	link,
	linkSync,
	SeekMode,
	// copy,
	// iter,
	// iterSync,
	open,
	openSync,
	create,
	createSync,
	read,
	readSync,
	write,
	writeSync,
	seek,
	seekSync,
	fsync,
	fsyncSync,
	fdatasync,
	fdatasyncSync,
	close,
	FsFile,
	// File,
	consoleSize,
	stdin,
	stdout,
	stderr,
	isatty,
	// Buffer,
	// readAll,
	// readAllSync,
	// writeAll,
	// writeAllSync,
	mkdir,
	mkdirSync,
	makeTempDir,
	makeTempDirSync,
	makeTempFile,
	makeTempFileSync,
	chmod,
	chmodSync,
	chown,
	chownSync,
	remove,
	removeSync,
	renameSync,
	rename,
	readTextFile,
	readTextFileSync,
	readFile,
	readFileSync,
	realPath,
	realPathSync,
	readDir,
	readDirSync,
	copyFile,
	copyFileSync,
	readLink,
	readLinkSync,
	lstat,
	lstatSync,
	stat,
	statSync,
	writeFile,
	writeFileSync,
	writeTextFile,
	writeTextFileSync,
	truncate,
	truncateSync,
	// metrics,
	resources,
	watchFs,
	// Process,
	addSignalListener,
	removeSignalListener,
	// run,
	Command,
	ChildProcess,
	inspect,
	PermissionStatus,
	Permissions,
	permissions,
	build,
	version,

	/**
	 * <en_us>command line parameters</en_us>
	 * <zh_cn>命令行参数</zh_cn>
	 * <zh_tw>命令行參數</zh_tw>
	 */
	args: COMMAND_LINE_ARGS,

	// customInspect,
	mainModule,
	symlink,
	symlinkSync,
	ftruncate,
	ftruncateSync,
	futimeSync,
	futime,
	fstat,
	fstatSync,
	utimeSync,
	utime,
	serveHttp,
	upgradeWebSocket,
	kill: killProcess,
	resolveDns,
	refTimer,
	unrefTimer,
	uid: UserId,
	gid: GroupId,
} = Deno;
