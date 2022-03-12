import { EnsResolver } from '@ethersproject/providers';
declare type Config = {
    /** ENS name */
    name?: string | null;
    /** Disables fetching */
    skip?: boolean;
};
export declare const useEnsResolver: ({ name, skip }?: Config) => readonly [{
    readonly data: EnsResolver | null | undefined;
    readonly loading: boolean;
    readonly error: Error | undefined;
}, (config?: {
    name: Config['name'];
} | undefined) => Promise<{
    data: import("@ethersproject/providers").Resolver | null;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
export {};
