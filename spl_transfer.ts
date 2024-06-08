import { 
    Keypair, 
    Connection,
    PublicKey, 
} from "@solana/web3.js";

import { 
    getOrCreateAssociatedTokenAccount,
    transfer,
 } from "@solana/spl-token";

import wallet from "./wallet.json";

// Get our wallet and setup the connection
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// This is the address of the Mint created with spl_init.ts
const mint = new PublicKey("2ybRAjnPdnzB1t3s1Tb2oRceS1XxeJBuNf6rXZHo3D1W");
// This is the ATA associated to my wallet account
const fromAta = new PublicKey("4ffLD1qEZ9QuD1HsmbEKkJXZBrEqnf2Aqpq828PW9xsy");

// We proceed in the creation of a brand new account, it is how recives our token.
const to = Keypair.generate();
console.log("To Address: ", to.publicKey.toBase58());

(async () => {

    // Creating the ATA for the brand new wallet using the mint address 
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection, 
        keypair,
        mint,
        to.publicKey,
    );

    const toAta = tokenAccount.address;
    console.log("Receiving Associated Token Account: ", toAta.toBase58());
    // How much we will to send ? 10
    const amountToAta = tokenAccount.amount;
    console.log("Amount in ATA: ", amountToAta.toString());

    const amount = 10e6;

    await transfer(
        connection,
        keypair,
        fromAta,
        toAta,
        keypair,
        amount
    );

    console.log("Transferred", amount, "from", fromAta.toBase58(), "to", toAta.toBase58());
})()