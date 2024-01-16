"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * i18n.ts
 *
 * <en_us>
 * Creation: January 15, 2024 11:45:49
 * Function: Provide international support basic types, marks, etc.
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月15日 11:45:49
 * 功能：提供国际化支持基础类型、标记等
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月15日 11:45:49
 * 功能：提供國際化支持基礎類型、標記等
 * </zh_tw>
 */
exports.__esModule = true;
exports.I18N_HTML_TAG_LENGTH_END = exports.I18N_HTML_TAG_LENGTH_BEGIN = exports.I18nFlag = exports.HTML_TAG_END__ZH_TW = exports.HTML_TAG_BEGIN__ZH_TW = exports.HTML_TAG_END__ZH_CN = exports.HTML_TAG_BEGIN__ZH_CN = exports.HTML_TAG_END__EN_US = exports.HTML_TAG_BEGIN__EN_US = exports.I18N_LANG_ARRAY = void 0;
/*
 * <en_us>internationalization</en_us>
 * <zh_cn>可国际化</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 */
exports.I18N_LANG_ARRAY = ['en_us', 'zh_cn', 'zh_tw'];
/*
 * <en_us>American English Start Label</en_us>
 * <zh_cn>美式英语起始标记</zh_cn>
 * <zh_tw>美式英語起始標記</zh_tw>
 */
exports.HTML_TAG_BEGIN__EN_US = '<en_us\>';
/*
 * <en_us>American English ending mark</en_us>
 * <zh_cn>美式英语结束标记</zh_cn>
 * <zh_tw>美式英語結束標記</zh_tw>
 */
exports.HTML_TAG_END__EN_US = '</en_us\>';
/*
 * <en_us>Simplified Chinese starting label</en_us>
 * <zh_cn>简体中文起始标记</zh_cn>
 * <zh_tw>簡體中文起始標記</zh_tw>
 */
exports.HTML_TAG_BEGIN__ZH_CN = '<zh_cn\>';
/*
 * <en_us>Simplified Chinese end mark</en_us>
 * <zh_cn>简体中文结束标记</zh_cn>
 * <zh_tw>簡體中文結束標記</zh_tw>
 */
exports.HTML_TAG_END__ZH_CN = '</zh_cn\>';
/*
 * <en_us>Traditional Chinese starting label</en_us>
 * <zh_cn>繁体中文起始标记</zh_cn>
 * <zh_tw>繁體中文起始標記</zh_tw>
 */
exports.HTML_TAG_BEGIN__ZH_TW = '<zh_tw\>';
/*
 * <en_us>Traditional Chinese end mark</en_us>
 * <zh_cn>繁体中文结束标记</zh_cn>
 * <zh_tw>繁體中文結束標記</zh_tw>
 */
exports.HTML_TAG_END__ZH_TW = '</zh_tw\>';
/*
 * <en_us>mark: internationalization</en_us>
 * <zh_cn>标记：国际化</zh_cn>
 * <zh_tw>標記：國際化</zh_tw>
 */
var I18nFlag;
(function (I18nFlag) {
    /*
     * <en_us>None</en_us>
     * <zh_cn>无</zh_cn>
     * <zh_tw>無</zh_tw>
     */
    I18nFlag[I18nFlag["none"] = 0] = "none";
    /*
     * <en_us>Only American English</en_us>
     * <zh_cn>仅显示美式英语</zh_cn>
     * <zh_tw>僅顯示美式英語</zh_tw>
     */
    I18nFlag[I18nFlag["en_us"] = 1] = "en_us";
    /*
     * <en_us>only show simplified Chinese</en_us>
     * <zh_cn>仅显示简体中文</zh_cn>
     * <zh_tw>僅顯示簡體中文</zh_tw>
     */
    I18nFlag[I18nFlag["zh_cn"] = 2] = "zh_cn";
    /*
     * <en_us>English and simplified Chinese</en_us>
     * <zh_cn>英语与简体中文</zh_cn>
     * <zh_tw>英語與簡體中文</zh_tw>
     */
    I18nFlag[I18nFlag["en_us_and_zh_cn"] = 3] = "en_us_and_zh_cn";
    /*
     * <en_us>only show traditional Chinese</en_us>
     * <zh_cn>仅显示繁体中文</zh_cn>
     * <zh_tw>僅顯示繁體中文</zh_tw>
     */
    I18nFlag[I18nFlag["zh_tw"] = 4] = "zh_tw";
    /*
     * <en_us>English and traditional Chinese</en_us>
     * <zh_cn>英语与繁体中文</zh_cn>
     * <zh_tw>英語與繁體中文</zh_tw>
     */
    I18nFlag[I18nFlag["en_us_and_zh_tw"] = 5] = "en_us_and_zh_tw";
    /*
     * <en_us>Simplified Chinese</en_us>
     * <zh_cn>简繁体中文</zh_cn>
     * <zh_tw>簡繁體中文</zh_tw>
     */
    I18nFlag[I18nFlag["zh_cn_and_zh_tw"] = 6] = "zh_cn_and_zh_tw";
    /*
     * <en_us>All</en_us>
     * <zh_cn>全部</zh_cn>
     * <zh_tw>全部</zh_tw>
     */
    I18nFlag[I18nFlag["all"] = 7] = "all";
})(I18nFlag = exports.I18nFlag || (exports.I18nFlag = {}));
/**
 * <en_us></en_us>
 * <zh_cn>开始标记长度</zh_cn>
 * <zh_tw></zh_tw>
 */
exports.I18N_HTML_TAG_LENGTH_BEGIN = 7;
/**
 * <en_us></en_us>
 * <zh_cn>结束标记长度</zh_cn>
 * <zh_tw></zh_tw>
 */
exports.I18N_HTML_TAG_LENGTH_END = exports.I18N_HTML_TAG_LENGTH_BEGIN + 1;
