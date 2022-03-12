import { TransactionReceipt, TransactionResponse } from '@ethersproject/providers';
export declare type Config = {
    /**
     * Number of blocks to wait for after transaction is mined
     * @default 1
     */
    confirmations?: number;
    /** Transaction hash to monitor */
    hash?: string;
    /** Disables fetching */
    skip?: boolean;
    timeout?: number;
    /** Function resolving to transaction receipt */
    wait?: TransactionResponse['wait'];
};
export declare const useWaitForTransaction: ({ confirmations, hash, skip, timeout, wait: wait_, }?: Config) => readonly [{
    readonly data: TransactionReceipt | undefined;
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
}, (config?: {
    confirmations?: Config['confirmations'];
    hash?: Config['hash'];
    timeout?: Config['timeout'];
    wait?: Config['wait'];
} | undefined) => Promise<{
    data: TransactionReceipt;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>];
