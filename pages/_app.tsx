import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import ReactDOM from 'react-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'


function getLibrary(provider: any, connector: any) {
  return new Web3Provider(provider)
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />

      </Web3ReactProvider>
    </ChakraProvider>
  );
}
