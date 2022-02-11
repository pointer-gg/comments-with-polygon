import type { NextPage } from "next";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Comments from "../components/Comments";
import theme from "../theme";
import {
  Provider as WagmiProvider,
  defaultChains,
  InjectedConnector,
  chain,
} from "wagmi";
import { providers } from "ethers";

// Chains for connectors to support
const chains = [...defaultChains, chain.hardhat];

const provider = ({ chainId, connector }) => {
  // if (!chainId || chainId === 1337) {
  //   return providers.getDefaultProvider("http://localhost:8545", { infura: "642809eccf5340d39458fa22ad194fdf"});
  // }

  console.log(connector?.chains);

  const chain = connector?.chains.find((c) => c.id === chainId);

  console.log(chain?.rpcUrls?.[0]);

  return providers.getDefaultProvider(
    chain?.rpcUrls?.[0] || "http://localhost:8545",
    { infura: "642809eccf5340d39458fa22ad194fdf" }
  );

  // return new providers.InfuraProvider(
  //   chainId,
  //   "642809eccf5340d39458fa22ad194fdf"
  // );

  // console.log(params);

  // return providers.getDefaultProvider(
  //   params.chainId ? params : "http://localhost:8545"
  // );
};

// Set up connectors
const connectors = () => {
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
  ];
};

// Create a client
const queryClient = new QueryClient();

const App: NextPage = () => {
  return (
    <WagmiProvider autoConnect provider={provider} connectors={connectors}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Box p={8} maxW="600px" minW="320px" m="0 auto">
            <Comments topic="cheese" />
          </Box>
        </QueryClientProvider>
      </ChakraProvider>
    </WagmiProvider>
  );
};

export default App;
