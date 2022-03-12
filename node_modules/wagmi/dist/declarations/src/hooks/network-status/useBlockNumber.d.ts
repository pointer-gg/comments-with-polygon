declare type Config = {
    /** Disables fetching */
    skip?: boolean;
    /** Subscribe to changes */
    watch?: boolean;
};
export declare const useBlockNumber: ({ skip, watch }?: Config) => readonly [{
    readonly data: number | undefined;
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, () => Promise<{
    data: number;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
export {};
