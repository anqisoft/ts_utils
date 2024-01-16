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

export * from './src/i18n.ts';
export * from './src/process.ts';
export * from './src/args.ts';
export * from './src/fs.ts';
export * from './src/chars.ts';

export * from './src/date.ts';
export * from './src/function.ts';
export * from './src/number.ts';

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
