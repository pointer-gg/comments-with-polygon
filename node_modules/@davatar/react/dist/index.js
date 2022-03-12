"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const providers_1 = require("@ethersproject/providers");
const react_1 = __importStar(require("react"));
const Image_1 = __importDefault(require("./Image"));
var Image_2 = require("./Image");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return __importDefault(Image_2).default; } });
function Davatar({ size, address, provider, graphApiKey, generatedAvatarType, defaultComponent, style, }) {
    const [avatarUri, setAvatarUri] = (0, react_1.useState)(null);
    const [ethersProvider, setEthersProvider] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        let eth = (0, providers_1.getDefaultProvider)();
        let chainId = null;
        let isEthers = false;
        // carlos: Only use the provided provider if ENS is actually on that chain
        if (provider) {
            if ((_a = provider.currentProvider) === null || _a === void 0 ? void 0 : _a.chainId) {
                chainId = parseInt(provider.currentProvider.chainId);
            }
            else if ((_b = provider.network) === null || _b === void 0 ? void 0 : _b.chainId) {
                isEthers = true;
                chainId = provider.network.chainId;
            }
            if ([1, 3, 4, 5].includes(chainId)) {
                eth = isEthers ? provider : new providers_1.Web3Provider(provider.currentProvider);
            }
            else {
                chainId = 1;
            }
        }
        setEthersProvider(eth);
        eth.lookupAddress(address).then(ensName => {
            if (ensName) {
                eth.getResolver(ensName).then(resolver => {
                    resolver.getText('avatar').then(avatar => {
                        if (avatar && avatar.length > 0) {
                            setAvatarUri(avatar);
                        }
                    });
                });
            }
        });
    }, [address, provider]);
    return (react_1.default.createElement(Image_1.default, { size: size, address: address, uri: avatarUri, graphApiKey: graphApiKey, provider: ethersProvider, generatedAvatarType: generatedAvatarType, defaultComponent: defaultComponent, style: style }));
}
exports.default = Davatar;
//# sourceMappingURL=index.js.map