import { Bytes } from 'ethers/lib/utils';
export declare type Config = {
    /** Message to sign with wallet */
    message?: Bytes | string;
};
export declare const useSignMessage: ({ message }?: Config) => readonly [{
    readonly data: string | undefined;
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, (config?: {
    message?: Config['message'];
} | undefined) => Promise<{
    data: string;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
