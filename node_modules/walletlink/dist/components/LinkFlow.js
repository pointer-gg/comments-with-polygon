"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkFlow = void 0;
const preact_1 = require("preact");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const LinkDialog_1 = require("./LinkDialog");
const TryExtensionLinkDialog_1 = require("./TryExtensionLinkDialog");
class LinkFlow {
    constructor(options) {
        this.extensionUI$ = new rxjs_1.BehaviorSubject({});
        this.subscriptions = new rxjs_1.Subscription();
        this.isConnected = false;
        this.isOpen = false;
        this.onCancel = null;
        this.root = null;
        // if true, hide QR code in LinkFlow (which happens if no jsonRpcUrl is provided)
        this.connectDisabled = false;
        this.darkMode = options.darkMode;
        this.version = options.version;
        this.sessionId = options.sessionId;
        this.sessionSecret = options.sessionSecret;
        this.walletLinkUrl = options.walletLinkUrl;
        this.isParentConnection = options.isParentConnection;
        this.connected$ = options.connected$;
        // Check if extension UI is enabled
        fetch("https://api.wallet.coinbase.com/rpc/v2/getFeatureFlags")
            .then(res => res.json())
            .then(json => {
            const enabled = json.result.desktop.extension_ui;
            if (typeof enabled === "undefined") {
                this.extensionUI$.next({ value: false });
            }
            else {
                this.extensionUI$.next({ value: enabled });
            }
        })
            .catch(err => {
            console.error('Couldn\'t fetch feature flags - ', err);
            this.extensionUI$.next({ value: false });
        });
    }
    attach(el) {
        this.root = document.createElement("div");
        this.root.className = "-walletlink-link-flow-root";
        el.appendChild(this.root);
        this.render();
        this.subscriptions.add(this.connected$.subscribe(v => {
            if (this.isConnected !== v) {
                this.isConnected = v;
                this.render();
            }
        }));
    }
    detach() {
        var _a;
        if (!this.root) {
            return;
        }
        this.subscriptions.unsubscribe();
        (0, preact_1.render)(null, this.root);
        (_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.root);
    }
    setConnectDisabled(connectDisabled) {
        this.connectDisabled = connectDisabled;
    }
    open(options) {
        this.isOpen = true;
        this.onCancel = options.onCancel;
        this.render();
    }
    close() {
        this.isOpen = false;
        this.onCancel = null;
        this.render();
    }
    render() {
        if (!this.root) {
            return;
        }
        const subscription = this.extensionUI$
            .pipe((0, operators_1.first)(enabled => enabled.value !== undefined)) // wait for a valid value before rendering
            .subscribe(enabled => {
            if (!this.root) {
                return;
            }
            (0, preact_1.render)(enabled.value ? ((0, preact_1.h)(TryExtensionLinkDialog_1.TryExtensionLinkDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, walletLinkUrl: this.walletLinkUrl, isOpen: this.isOpen, isConnected: this.isConnected, isParentConnection: this.isParentConnection, onCancel: this.onCancel, connectDisabled: this.connectDisabled })) : ((0, preact_1.h)(LinkDialog_1.LinkDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, walletLinkUrl: this.walletLinkUrl, isOpen: this.isOpen, isConnected: this.isConnected, isParentConnection: this.isParentConnection, onCancel: this.onCancel })), this.root);
        });
        this.subscriptions.add(subscription);
    }
}
exports.LinkFlow = LinkFlow;
