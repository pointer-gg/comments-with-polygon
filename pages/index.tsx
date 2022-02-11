import type { NextPage } from "next";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import Comments from "../components/Comments";
import theme from "../theme";
import { Provider as WagmiProvider, InjectedConnector, chain } from "wagmi";
import { providers } from "ethers";

// Chains for connectors to support
const chains = [chain.polygonTestnetMumbai, chain.hardhat];

const provider = ({ chainId, connector }) => {
  const selectedChain = connector?.chains.find((c) => c.id === chainId);

  return providers.getDefaultProvider(
    selectedChain?.rpcUrls?.[0] || "http://localhost:8545"
  );
};

// Set up connectors
const connectors = () => {
  return [
    new InjectedConnector({
      chains,
    }),
  ];
};

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: NextPage = () => {
  return (
    <WagmiProvider autoConnect provider={provider} connectors={connectors}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Box p={8} maxW="600px" minW="320px" m="0 auto">
            <Comments topic="my-blog-post" />
            <Toaster position="bottom-right" />
          </Box>
        </QueryClientProvider>
      </ChakraProvider>
    </WagmiProvider>
  );
};

export default App;
