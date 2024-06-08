import {Keypair} from "@solana/web3.js";

// Generate a new Keypair
const keypair = Keypair.generate();

// Print wallet address (public key) and
// print the secret key so to save them 
console.log(`Brand new Wallet generated! Check the public key: ${keypair.publicKey.toBase58()} \n\n To save your wallet, create a wallet.json and paste in this secret key: [${keypair.secretKey}]`)

// Public key generated : BAYn5WKbBxBNA18cPp6HoHSUGN3inEtXTfyV4JzUWLje
// Secret key : inside file wallet.json