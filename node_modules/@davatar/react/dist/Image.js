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
exports.getGatewayUrl = exports.getCachedUrl = void 0;
const contracts_1 = require("@ethersproject/contracts");
const bn_js_1 = __importDefault(require("bn.js"));
const react_1 = __importStar(require("react"));
const Blockies_1 = __importDefault(require("./Blockies"));
const Jazzicon_1 = __importDefault(require("./Jazzicon"));
// 24 hour TTL
const CACHE_TTL = 60 * 60 * 24 * 1000;
const erc721Abi = [
    'function ownerOf(uint256 tokenId) view returns (address)',
    'function tokenURI(uint256 _tokenId) external view returns (string)',
];
const erc1155Abi = [
    'function balanceOf(address _owner, uint256 _id) view returns (uint256)',
    'function uri(uint256 _id) view returns (string)',
];
const getCachedUrl = (key) => {
    const normalizedKey = key.toLowerCase();
    const cachedItem = window.localStorage.getItem(`davatar/${normalizedKey}`);
    if (cachedItem) {
        const item = JSON.parse(cachedItem);
        if (new Date(item.expiresAt) > new Date()) {
            return (0, exports.getGatewayUrl)(item.url);
        }
    }
    return null;
};
exports.getCachedUrl = getCachedUrl;
const getGatewayUrl = (uri, tokenId) => {
    const match = new RegExp(/([a-z]+)(?::\/\/|\/)(.*)/).exec(uri);
    if (!match || match.length < 3) {
        return uri;
    }
    const id = match[2];
    let url = uri;
    switch (match[1]) {
        case 'ar': {
            url = `https://arweave.net/${id}`;
            break;
        }
        case 'ipfs':
            if (id.includes('ipfs') || id.includes('ipns')) {
                url = `https://gateway.ipfs.io/${id}`;
            }
            else {
                url = `https://gateway.ipfs.io/ipfs/${id}`;
            }
            break;
        case 'ipns':
            if (id.includes('ipfs') || id.includes('ipns')) {
                url = `https://gateway.ipfs.io/${id}`;
            }
            else {
                url = `https://gateway.ipfs.io/ipns/${id}`;
            }
            break;
        case 'http':
        case 'https':
            break;
    }
    return tokenId ? url.replaceAll('{id}', tokenId) : url;
};
exports.getGatewayUrl = getGatewayUrl;
function Avatar({ uri, style, className, size, address, provider, generatedAvatarType, defaultComponent, }) {
    const [url, setUrl] = (0, react_1.useState)(null);
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!uri && address) {
            const cachedUrl = (0, exports.getCachedUrl)(address.toLowerCase());
            if (cachedUrl) {
                setUrl(cachedUrl);
            }
        }
        if (!uri) {
            return;
        }
        if (uri && address) {
            const cachedUrl = (0, exports.getCachedUrl)(`${address.toLowerCase()}/${uri}`);
            if (cachedUrl) {
                setUrl(cachedUrl);
            }
        }
        const match = new RegExp(/([a-z]+):\/\/(.*)/).exec(uri);
        const match721 = new RegExp(/eip155:1\/erc721:(\w+)\/(\w+)/).exec(uri);
        const match1155 = new RegExp(/eip155:1\/erc1155:(\w+)\/(\w+)/).exec(uri);
        if (match && match.length === 3) {
            const protocol = match[1];
            const id = match[2];
            switch (protocol) {
                case 'ar': {
                    const baseUrl = 'https://arweave.net';
                    fetch(`${baseUrl}/graphql`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json;charset=UTF-8',
                        },
                        body: JSON.stringify({
                            query: `
              {
                transactions(ids: ["${id}"]) {
                  edges {
                    node {
                      id
                      owner {
                        address
                      }
                    }
                  }
                }
              }
              `,
                        }),
                    })
                        .then(d => d.json())
                        .then(res => res.data.transactions.edges[0].node)
                        .then(tx => fetch(`${baseUrl}/graphql`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json;charset=UTF-8',
                        },
                        body: JSON.stringify({
                            query: `
                {
                  transactions(owners: ["${tx.owner.address}"], tags: { name: "Origin", values: ["${tx.id}"] }, sort: HEIGHT_DESC) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
                `,
                        }),
                    }))
                        .then(res => res.json())
                        .then(res => {
                        if (res.data && res.data.transactions.edges.length > 0) {
                            setUrl(`${baseUrl}/${res.data.transactions.edges[0].node.id}`);
                        }
                        else {
                            setUrl(`${baseUrl}/${id}`);
                        }
                    })
                        .catch(e => console.error(e)); // eslint-disable-line
                    break;
                }
                case 'ipfs':
                    setUrl(`https://gateway.ipfs.io/ipfs/${id}`);
                    break;
                case 'ipns':
                    setUrl(`https://gateway.ipfs.io/ipns/${id}`);
                    break;
                case 'http':
                case 'https':
                    setUrl(uri);
                    break;
                default:
                    setUrl(uri);
                    break;
            }
        }
        else if (address && match721 && match721.length === 3) {
            const contractId = match721[1].toLowerCase();
            const tokenId = match721[2];
            const normalizedAddress = address.toLowerCase();
            if (provider) {
                const erc721Contract = new contracts_1.Contract(contractId, erc721Abi, provider);
                erc721Contract
                    .ownerOf(tokenId)
                    .then((owner) => {
                    if (!owner || owner.toLowerCase() !== normalizedAddress) {
                        throw new Error('ERC721 token not owned by address');
                    }
                    return erc721Contract.tokenURI(tokenId);
                })
                    .then((tokenURI) => fetch((0, exports.getGatewayUrl)(tokenURI, new bn_js_1.default(tokenId).toString(16))))
                    .then((res) => res.json())
                    .then((data) => setUrl((0, exports.getGatewayUrl)(data.image)))
                    .catch((e) => console.error(e)); // eslint-disable-line
            }
        }
        else if (address && match1155 && match1155.length === 3) {
            const contractId = match1155[1].toLowerCase();
            const tokenId = match1155[2];
            if (provider) {
                const erc1155Contract = new contracts_1.Contract(contractId, erc1155Abi, provider);
                erc1155Contract
                    .balanceOf(address, tokenId)
                    .then((balance) => {
                    if (balance.isZero()) {
                        throw new Error('ERC1155 token not owned by address');
                    }
                    return erc1155Contract.uri(tokenId);
                })
                    .then((tokenURI) => fetch((0, exports.getGatewayUrl)(tokenURI, new bn_js_1.default(tokenId).toString(16))))
                    .then((res) => res.json())
                    .then((data) => setUrl((0, exports.getGatewayUrl)(data.image)))
                    .catch((e) => console.error(e)); // eslint-disable-line
            }
        }
        else {
            setUrl((0, exports.getGatewayUrl)(uri));
        }
    }, [uri, address, provider]);
    const onLoad = (0, react_1.useCallback)(() => {
        setLoaded(true);
        if (address) {
            const normalizedAddress = address.toLowerCase();
            const cachedItem = window.localStorage.getItem(normalizedAddress);
            const item = cachedItem && JSON.parse(cachedItem);
            if (!item || new Date(item.expiresAt) > new Date()) {
                const expireDate = new Date(new Date().getTime() + CACHE_TTL);
                window.localStorage.setItem(`davatar/${normalizedAddress}`, JSON.stringify({ url, expiresAt: expireDate }));
                window.localStorage.setItem(`davatar/${normalizedAddress}/${uri}`, JSON.stringify({ url, expiresAt: expireDate }));
            }
        }
    }, [address, url, uri]);
    let avatarImg = null;
    const cssStyle = Object.assign({ display: loaded ? undefined : 'none', width: `${size}px`, height: `${size}px`, borderRadius: `${size}px` }, (style || {}));
    if (url) {
        avatarImg = react_1.default.createElement("img", { alt: "avatar", style: cssStyle, className: className, src: url, onLoad: onLoad });
    }
    const defaultAvatar = (!url || !loaded) &&
        address &&
        (defaultComponent ||
            (generatedAvatarType === 'blockies' ? (react_1.default.createElement(Blockies_1.default, { address: address, size: size })) : (react_1.default.createElement(Jazzicon_1.default, { address: address, size: size }))));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        defaultAvatar,
        avatarImg));
}
exports.default = Avatar;
//# sourceMappingURL=Image.js.map