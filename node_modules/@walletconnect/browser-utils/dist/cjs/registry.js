"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMobileRegistry = exports.formatMobileRegistryEntry = exports.getAppLogoUrl = exports.getDappRegistryUrl = exports.getWalletRegistryUrl = void 0;
const API_URL = "https://registry.walletconnect.org";
function getWalletRegistryUrl() {
    return API_URL + "/data/wallets.json";
}
exports.getWalletRegistryUrl = getWalletRegistryUrl;
function getDappRegistryUrl() {
    return API_URL + "/data/dapps.json";
}
exports.getDappRegistryUrl = getDappRegistryUrl;
function getAppLogoUrl(id) {
    return API_URL + "/logo/sm/" + id + ".jpeg";
}
exports.getAppLogoUrl = getAppLogoUrl;
function formatMobileRegistryEntry(entry, platform = "mobile") {
    return {
        name: entry.name || "",
        shortName: entry.metadata.shortName || "",
        color: entry.metadata.colors.primary || "",
        logo: entry.id ? getAppLogoUrl(entry.id) : "",
        universalLink: entry[platform].universal || "",
        deepLink: entry[platform].native || "",
    };
}
exports.formatMobileRegistryEntry = formatMobileRegistryEntry;
function formatMobileRegistry(registry, platform = "mobile") {
    return Object.values(registry)
        .filter(entry => !!entry[platform].universal || !!entry[platform].native)
        .map((entry) => formatMobileRegistryEntry(entry, platform));
}
exports.formatMobileRegistry = formatMobileRegistry;
//# sourceMappingURL=registry.js.map