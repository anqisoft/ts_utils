export type I18N_LANG_KIND = 'en_us' | 'zh_cn' | 'zh_tw';
export declare const I18N_LANG_ARRAY: string[];
export declare const HTML_TAG_BEGIN__EN_US = "<en_us>";
export declare const HTML_TAG_END__EN_US = "</en_us>";
export declare const HTML_TAG_BEGIN__ZH_CN = "<zh_cn>";
export declare const HTML_TAG_END__ZH_CN = "</zh_cn>";
export declare const HTML_TAG_BEGIN__ZH_TW = "<zh_tw>";
export declare const HTML_TAG_END__ZH_TW = "</zh_tw>";
export interface I18nable {
    en_us: string;
    zh_cn: string;
    zh_tw: string;
}
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
export declare const I18N_HTML_TAG_LENGTH_BEGIN = 7;
/**
 * <en_us></en_us>
 * <zh_cn>结束标记长度</zh_cn>
 * <zh_tw></zh_tw>
 */
export declare const I18N_HTML_TAG_LENGTH_END: number;
