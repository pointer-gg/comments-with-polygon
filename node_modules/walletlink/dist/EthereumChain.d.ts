export declare enum EthereumChain {
    ETHEREUM_MAINNET = 1,
    OPTIMISM_MAINNET = 10,
    POLYGON_MAINNET = 137,
    ETHEREUM_CLASSIC_MAINNET = 61,
    BSC_MAINNET = 56,
    FANTOM_MAINNET = 250,
    ARBITRUM_MAINNET = 42161,
    XDAI_MAINNET = 100,
    AVALANCHE_MAINNET = 43114,
    ROPSTEN = 3,
    RINKEBY = 4,
    GOERLI = 5,
    KOVAN = 42,
    OPTIMISM_KOVAN = 69,
    POLYGON_TESTNET = 80001,
    BSC_TESTNET = 97,
    FANTOM_TESTNET = 4002,
    ARBITRUM_TESTNET = 421611,
    AVALANCHE_FUJI = 43113
}
export declare namespace EthereumChain {
    function rpcUrl(thiz: EthereumChain): string | undefined;
    function fromChainId(chainId: bigint): EthereumChain | undefined;
}
