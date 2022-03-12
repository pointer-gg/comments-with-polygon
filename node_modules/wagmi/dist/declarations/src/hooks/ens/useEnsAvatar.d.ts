declare type Config = {
    /** Address or ENS name */
    addressOrName?: string | null;
    /** Disables fetching */
    skip?: boolean;
};
export declare const useEnsAvatar: ({ addressOrName, skip }?: Config) => readonly [{
    readonly data: string | null | undefined;
    readonly loading: boolean;
    readonly error: Error | undefined;
}, (config?: {
    addressOrName: string;
} | undefined) => Promise<string | Error | null>];
export {};
