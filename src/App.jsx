//import "./App.css";
import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
//import { clusterApiUrl } from "@solana/web3.js";

import { RequestAirdrop } from "./RequestAirdrop";
import { ShowBalance } from "./ShowBalance";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
const wallets = [new PhantomWalletAdapter()];

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WalletMultiButton></WalletMultiButton>
            {/* <RequestAirdrop></RequestAirdrop> */}
            <ShowBalance />
            {/* <WalletDisconnectButton></WalletDisconnectButton> */}
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
