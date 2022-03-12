import { Web3Provider } from '@ethersproject/providers';
import WalletConnectProvider from '@walletconnect/ethereum-provider';
import { IWCEthRpcConnectionOptions } from '@walletconnect/types';
import { Chain } from '../types';
import { Connector } from './base';
export declare class WalletConnectConnector extends Connector<WalletConnectProvider, IWCEthRpcConnectionOptions> {
    #private;
    readonly id = "walletConnect";
    readonly name = "WalletConnect";
    readonly ready = true;
    constructor(config: {
        chains?: Chain[];
        options: IWCEthRpcConnectionOptions;
    });
    connect(): Promise<{
        account: string;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: Web3Provider;
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(create?: boolean): WalletConnectProvider;
    getSigner(): Promise<import("@ethersproject/providers").JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => void;
}
