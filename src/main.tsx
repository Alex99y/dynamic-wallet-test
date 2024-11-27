import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: "4d965b25-755b-4e7f-bfae-14cf0e2613b0",
        walletConnectors: [EthereumWalletConnectors],
        initialAuthenticationMode: "connect-only",
      }}
    >
      <App />
    </DynamicContextProvider>
  </StrictMode >,
)

