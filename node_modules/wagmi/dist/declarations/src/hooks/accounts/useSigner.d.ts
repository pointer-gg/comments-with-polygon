import { Signer } from 'ethers';
declare type Config = {
    /** Disables fetching */
    skip?: boolean;
};
declare type State = {
    data?: Signer;
    error?: Error;
    loading?: boolean;
};
export declare const useSigner: ({ skip }?: Config) => readonly [State, () => Promise<Signer | undefined>];
export {};
