import { WalletLinkAnalyticsAbstract } from "./init/WalletLinkAnalyticsAbstract";
import { WalletLinkProvider } from "./provider/WalletLinkProvider";
import { WalletLinkUI, WalletLinkUIOptions } from "./provider/WalletLinkUI";
/** WalletLink Constructor Options */
export interface WalletLinkOptions {
    /** Application name */
    appName: string;
    /** @optional Application logo image URL; favicon is used if unspecified */
    appLogoUrl?: string | null;
    /** @optional Use dark theme */
    darkMode?: boolean;
    /** @optional WalletLink server URL; for most, leave it unspecified */
    walletLinkUrl?: string;
    /** @optional an implementation of WalletLinkUI; for most, leave it unspecified */
    walletLinkUIConstructor?: (options: Readonly<WalletLinkUIOptions>) => WalletLinkUI;
    /** @optional an implementation of WalletLinkAnalytics.ts; for most, leave it unspecified  */
    walletLinkAnalytics?: WalletLinkAnalyticsAbstract;
    /** @optional whether wallet link provider should override the isMetaMask property. */
    overrideIsMetaMask?: boolean;
    /** @optional whether wallet link provider should override the isCoinbaseWallet property. */
    overrideIsCoinbaseWallet?: boolean;
}
export declare class WalletLink {
    /**
     * WalletLink version
     */
    static VERSION: any;
    private _appName;
    private _appLogoUrl;
    private _relay;
    private _relayEventManager;
    private _storage;
    private _overrideIsMetaMask;
    private _overrideIsCoinbaseWallet;
    private _walletLinkAnalytics;
    /**
     * Constructor
     * @param options WalletLink options object
     */
    constructor(options: Readonly<WalletLinkOptions>);
    /**
     * Create a Web3 Provider object
     * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
     * @param chainId Ethereum Chain ID (Default: 1)
     * @returns A Web3 Provider
     */
    makeWeb3Provider(jsonRpcUrl?: string, chainId?: number): WalletLinkProvider;
    /**
     * Set application information
     * @param appName Application name
     * @param appLogoUrl Application logo image URL
     */
    setAppInfo(appName: string | undefined, appLogoUrl: string | null | undefined): void;
    /**
     * Disconnect. After disconnecting, this will reload the web page to ensure
     * all potential stale state is cleared.
     */
    disconnect(): void;
}
