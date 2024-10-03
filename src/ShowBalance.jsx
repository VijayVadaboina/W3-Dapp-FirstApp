import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowBalance() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  async function getMeUserBalance() {
    if (publicKey) {
      const balance = await connection.getBalance(publicKey);
      document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
  }

  getMeUserBalance();

  return (
    <div>
      Balance : <span id="balance"> </span> SOL
    </div>
  );
}
