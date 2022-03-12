declare type Config = {
    /** Address to look up */
    address?: string;
    /** Disables fetching */
    skip?: boolean;
};
export declare const useEnsLookup: ({ address, skip }?: Config) => readonly [{
    readonly data: string | null | undefined;
    readonly loading: boolean;
    readonly error: Error | undefined;
}, (config?: {
    address: string;
} | undefined) => Promise<{
    data: string | null;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
export {};
