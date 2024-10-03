import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  PublicKey,
} from "@solana/web3.js";

export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendTokens() {
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;

    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );
    if (!wallet.connected) {
      console.log(" wallet is not connected");
      console.log(wallet);
    } else {
      await wallet.sendTransaction(transaction, connection);
      alert("sent " + amount + "sol to " + to);
    }
  }
  return (
    <div>
      <input id="to" type="text" placeholder="TO" />
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={sendTokens}>Send</button>
    </div>
  );
}
