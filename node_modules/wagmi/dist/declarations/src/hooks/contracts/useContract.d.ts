import { ContractInterface, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
export declare type Config = {
    /** Contract address or ENS name */
    addressOrName: string;
    /** Contract interface or ABI */
    contractInterface: ContractInterface;
    /** Signer or provider to attach to contract */
    signerOrProvider?: Signer | Provider;
};
export declare const useContract: <Contract_1 = any>({ addressOrName, contractInterface, signerOrProvider, }: Config) => Contract_1;
