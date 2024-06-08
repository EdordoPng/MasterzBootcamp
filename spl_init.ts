import { 
    Keypair, 
    Connection, 
} from "@solana/web3.js";
import { createMint } from "@solana/spl-token";

// Con questo programma andiamo a creare il mint account per il nostro token 
// Using this script we proceed to create the "Mint account" using the "Token Program"
// We can get the Mint Address associated to the Mint Account


import wallet from "./wallet.json";

// Take again our keypair from the wallet created before 
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
// Setup a new connection to the devnet
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async () => {

    const mint = await createMint(
        connection,
        keypair,
        keypair.publicKey,
        null,
        6, // we chose to use 6 decimals
    );

    console.log("Mint Address:", mint.toBase58());
})()

// After that I got this Mint Address : 2ybRAjnPdnzB1t3s1Tb2oRceS1XxeJBuNf6rXZHo3D1W