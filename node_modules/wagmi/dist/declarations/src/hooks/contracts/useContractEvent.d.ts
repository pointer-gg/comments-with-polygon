import { ethers } from 'ethers';
import { Config as UseContractConfig } from './useContract';
declare type Config = {
    /** Receive only a single event */
    once?: boolean;
};
export declare const useContractEvent: <Contract extends ethers.Contract = ethers.Contract>(contractConfig: UseContractConfig, eventName: Parameters<Contract["on"]>[0], listener: Parameters<Contract["on"]>[1], { once }?: Config) => void;
export {};
