"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkDialog = void 0;
const clsx_1 = __importDefault(require("clsx"));
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const LinkDialog_css_1 = __importDefault(require("./LinkDialog-css"));
const QRCode_1 = require("./QRCode");
const Spinner_1 = require("./Spinner");
const version_1 = require("../version");
const LinkDialog = props => {
    const [isContainerHidden, setContainerHidden] = (0, hooks_1.useState)(!props.isOpen);
    const [isDialogHidden, setDialogHidden] = (0, hooks_1.useState)(!props.isOpen);
    (0, hooks_1.useEffect)(() => {
        const { isOpen } = props;
        const timers = [
            window.setTimeout(() => {
                setDialogHidden(!isOpen);
            }, 10)
        ];
        if (isOpen) {
            setContainerHidden(false);
        }
        else {
            timers.push(window.setTimeout(() => {
                setContainerHidden(true);
            }, 360));
        }
        return () => {
            timers.forEach(window.clearTimeout);
        };
    }, [props.isOpen]);
    return ((0, preact_1.h)("div", { class: (0, clsx_1.default)("-walletlink-link-dialog-container", props.darkMode && "-walletlink-link-dialog-container-dark", isContainerHidden && "-walletlink-link-dialog-container-hidden") },
        (0, preact_1.h)("style", null, LinkDialog_css_1.default),
        (0, preact_1.h)("div", { class: (0, clsx_1.default)("-walletlink-link-dialog-backdrop", isDialogHidden && "-walletlink-link-dialog-backdrop-hidden") }),
        (0, preact_1.h)("div", { class: "-walletlink-link-dialog" },
            (0, preact_1.h)("div", { class: (0, clsx_1.default)("-walletlink-link-dialog-box", isDialogHidden && "-walletlink-link-dialog-box-hidden") },
                (0, preact_1.h)(ScanQRCode, { darkMode: props.darkMode, version: props.version, sessionId: props.sessionId, sessionSecret: props.sessionSecret, walletLinkUrl: props.walletLinkUrl, isConnected: props.isConnected, isParentConnection: props.isParentConnection }),
                props.onCancel && (0, preact_1.h)(CancelButton, { onClick: props.onCancel })))));
};
exports.LinkDialog = LinkDialog;
const ScanQRCode = props => {
    const serverUrl = window.encodeURIComponent(props.walletLinkUrl);
    const sessionIdKey = props.isParentConnection ? "parent-id" : "id";
    const qrUrl = `${props.walletLinkUrl}/#/link?${sessionIdKey}=${props.sessionId}&secret=${props.sessionSecret}&server=${serverUrl}&v=1`;
    return ((0, preact_1.h)("div", { class: "-walletlink-link-dialog-box-content" },
        (0, preact_1.h)("h3", null,
            "Scan to",
            (0, preact_1.h)("br", null),
            " Connect"),
        (0, preact_1.h)("div", { class: "-walletlink-link-dialog-box-content-qrcode" },
            (0, preact_1.h)("div", { class: "-walletlink-link-dialog-box-content-qrcode-wrapper" },
                (0, preact_1.h)(QRCode_1.QRCode, { content: qrUrl, width: 224, height: 224, fgColor: "#000", bgColor: "transparent" })),
            (0, preact_1.h)("input", { type: "hidden", name: "walletlink-version", value: version_1.LIB_VERSION }),
            (0, preact_1.h)("input", { type: "hidden", value: qrUrl }),
            !props.isConnected && ((0, preact_1.h)("div", { class: "-walletlink-link-dialog-box-content-qrcode-connecting" },
                (0, preact_1.h)(Spinner_1.Spinner, { size: 128, color: props.darkMode ? "#fff" : "#000" }),
                (0, preact_1.h)("p", null, "Connecting..."))),
            (0, preact_1.h)("p", { title: `WalletLink v${props.version}` }, "Powered by WalletLink")),
        (0, preact_1.h)("a", { href: `${props.walletLinkUrl}/#/wallets`, target: "_blank", rel: "noopener" }, "Don\u2019t have a wallet app?")));
};
const CancelButton = props => ((0, preact_1.h)("button", { class: "-walletlink-link-dialog-box-cancel", onClick: props.onClick },
    (0, preact_1.h)("div", { class: "-walletlink-link-dialog-box-cancel-x" })));
