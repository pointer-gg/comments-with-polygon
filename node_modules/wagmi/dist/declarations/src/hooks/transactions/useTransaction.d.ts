import { TransactionRequest, TransactionResponse } from '@ethersproject/providers';
export declare type Config = {
    /** Object to use when creating transaction */
    request?: TransactionRequest;
};
export declare const useTransaction: ({ request }?: Config) => readonly [{
    readonly data: TransactionResponse | undefined;
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, (config?: {
    request: Config['request'];
} | undefined) => Promise<{
    data: TransactionResponse;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
