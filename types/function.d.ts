export interface SyncFunc {
    (...args: unknown[]): void;
}
export interface AsyncFunc {
    async(...args: unknown[]): void;
}
export declare function isSyncFunc(func: unknown): func is SyncFunc;
export declare function isAsyncFunc(func: unknown): func is AsyncFunc;
