import type { NextPage } from "next";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import theme from "../theme";

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
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box p={8} maxW="600px" minW="320px" m="0 auto">
          <Heading>Oops, no comments yet!</Heading>
          <Toaster position="bottom-right" />
        </Box>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
