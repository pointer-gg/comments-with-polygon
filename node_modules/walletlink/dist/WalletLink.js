"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletLink = void 0;
const WalletLinkAnalytics_1 = require("./connection/WalletLinkAnalytics");
const ScopedLocalStorage_1 = require("./lib/ScopedLocalStorage");
const WalletLinkProvider_1 = require("./provider/WalletLinkProvider");
const WalletLinkSdkUI_1 = require("./provider/WalletLinkSdkUI");
const WalletLinkRelay_1 = require("./relay/WalletLinkRelay");
const WalletLinkRelayEventManager_1 = require("./relay/WalletLinkRelayEventManager");
const util_1 = require("./util");
const WALLETLINK_URL = process.env.WALLETLINK_URL || "https://www.walletlink.org";
const WALLETLINK_VERSION = process.env.WALLETLINK_VERSION ||
    require("../package.json").version ||
    "unknown";
class WalletLink {
    /**
     * Constructor
     * @param options WalletLink options object
     */
    constructor(options) {
        var _a;
        this._appName = "";
        this._appLogoUrl = null;
        this._relay = null;
        this._relayEventManager = null;
        const walletLinkUrl = options.walletLinkUrl || WALLETLINK_URL;
        let walletLinkUIConstructor;
        if (!options.walletLinkUIConstructor) {
            walletLinkUIConstructor = opts => new WalletLinkSdkUI_1.WalletLinkSdkUI(opts);
        }
        else {
            walletLinkUIConstructor = options.walletLinkUIConstructor;
        }
        if (typeof options.overrideIsMetaMask === "undefined") {
            this._overrideIsMetaMask = false;
        }
        else {
            this._overrideIsMetaMask = options.overrideIsMetaMask;
        }
        this._overrideIsCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
        this._walletLinkAnalytics = options.walletLinkAnalytics
            ? options.walletLinkAnalytics
            : new WalletLinkAnalytics_1.WalletLinkAnalytics();
        const u = new URL(walletLinkUrl);
        const walletLinkOrigin = `${u.protocol}//${u.host}`;
        this._storage = new ScopedLocalStorage_1.ScopedLocalStorage(`-walletlink:${walletLinkOrigin}`);
        this._storage.setItem("version", WalletLink.VERSION);
        if (typeof window.walletLinkExtension !== "undefined") {
            return;
        }
        this._relayEventManager = new WalletLinkRelayEventManager_1.WalletLinkRelayEventManager();
        this._relay = new WalletLinkRelay_1.WalletLinkRelay({
            walletLinkUrl,
            version: WALLETLINK_VERSION,
            darkMode: !!options.darkMode,
            walletLinkUIConstructor,
            storage: this._storage,
            relayEventManager: this._relayEventManager,
            walletLinkAnalytics: this._walletLinkAnalytics
        });
        this.setAppInfo(options.appName, options.appLogoUrl);
        this._relay.attachUI();
    }
    /**
     * Create a Web3 Provider object
     * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
     * @param chainId Ethereum Chain ID (Default: 1)
     * @returns A Web3 Provider
     */
    makeWeb3Provider(jsonRpcUrl = "", chainId = 1) {
        if (typeof window.walletLinkExtension !== "undefined") {
            if (
            /* eslint-disable @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            typeof window.walletLinkExtension.isCipher !== "boolean" ||
                // @ts-ignore
                !window.walletLinkExtension.isCipher
            /* eslint-enable @typescript-eslint/ban-ts-comment */
            ) {
                window.walletLinkExtension.setProviderInfo(jsonRpcUrl, chainId);
            }
            return window.walletLinkExtension;
        }
        const relay = this._relay;
        if (!relay || !this._relayEventManager || !this._storage) {
            throw new Error("Relay not initialized, should never happen");
        }
        if (!jsonRpcUrl)
            relay.setConnectDisabled(true);
        return new WalletLinkProvider_1.WalletLinkProvider({
            relayProvider: () => Promise.resolve(relay),
            relayEventManager: this._relayEventManager,
            storage: this._storage,
            jsonRpcUrl,
            chainId,
            walletLinkAnalytics: this._walletLinkAnalytics,
            overrideIsMetaMask: this._overrideIsMetaMask,
            overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet
        });
    }
    /**
     * Set application information
     * @param appName Application name
     * @param appLogoUrl Application logo image URL
     */
    setAppInfo(appName, appLogoUrl) {
        var _a;
        this._appName = appName || "DApp";
        this._appLogoUrl = appLogoUrl || (0, util_1.getFavicon)();
        if (typeof window.walletLinkExtension !== "undefined") {
            if (
            /* eslint-disable @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            typeof window.walletLinkExtension.isCipher !== "boolean" ||
                // @ts-ignore
                !window.walletLinkExtension.isCipher
            /* eslint-enable @typescript-eslint/ban-ts-comment */
            ) {
                window.walletLinkExtension.setAppInfo(this._appName, this._appLogoUrl);
            }
        }
        else {
            (_a = this._relay) === null || _a === void 0 ? void 0 : _a.setAppInfo(this._appName, this._appLogoUrl);
        }
    }
    /**
     * Disconnect. After disconnecting, this will reload the web page to ensure
     * all potential stale state is cleared.
     */
    disconnect() {
        var _a;
        if (typeof window.walletLinkExtension !== "undefined") {
            window.walletLinkExtension.close();
        }
        else {
            (_a = this._relay) === null || _a === void 0 ? void 0 : _a.resetAndReload();
        }
    }
}
exports.WalletLink = WalletLink;
/**
 * WalletLink version
 */
WalletLink.VERSION = WALLETLINK_VERSION;
