import '../styles/globals.css'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from '@rainbow-me/rainbowkit'

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    infuraProvider({
      apiKey: '1023bdbff41a4451a090ef94b5bc9552',
      priority: 1,
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Custom Dex',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: '#18181b',
    accentColorForeground: '#fff',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
