"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletLink = exports.WalletLinkProvider = void 0;
const WalletLinkProvider_1 = require("./provider/WalletLinkProvider");
const WalletLink_1 = require("./WalletLink");
var WalletLinkProvider_2 = require("./provider/WalletLinkProvider");
Object.defineProperty(exports, "WalletLinkProvider", { enumerable: true, get: function () { return WalletLinkProvider_2.WalletLinkProvider; } });
var WalletLink_2 = require("./WalletLink");
Object.defineProperty(exports, "WalletLink", { enumerable: true, get: function () { return WalletLink_2.WalletLink; } });
exports.default = WalletLink_1.WalletLink;
if (typeof window !== "undefined") {
    window.WalletLink = WalletLink_1.WalletLink;
    window.WalletLinkProvider = WalletLinkProvider_1.WalletLinkProvider;
}
