import type { AppProps } from "next/app";
import "@fontsource/poppins";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
