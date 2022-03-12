const API_URL = "https://registry.walletconnect.org";
export function getWalletRegistryUrl() {
    return API_URL + "/data/wallets.json";
}
export function getDappRegistryUrl() {
    return API_URL + "/data/dapps.json";
}
export function getAppLogoUrl(id) {
    return API_URL + "/logo/sm/" + id + ".jpeg";
}
export function formatMobileRegistryEntry(entry, platform = "mobile") {
    return {
        name: entry.name || "",
        shortName: entry.metadata.shortName || "",
        color: entry.metadata.colors.primary || "",
        logo: entry.id ? getAppLogoUrl(entry.id) : "",
        universalLink: entry[platform].universal || "",
        deepLink: entry[platform].native || "",
    };
}
export function formatMobileRegistry(registry, platform = "mobile") {
    return Object.values(registry)
        .filter(entry => !!entry[platform].universal || !!entry[platform].native)
        .map((entry) => formatMobileRegistryEntry(entry, platform));
}
//# sourceMappingURL=registry.js.map