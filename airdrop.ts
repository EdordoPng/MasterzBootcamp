import {
    Keypair,
    Connection,
    LAMPORTS_PER_SOL
} from "@solana/web3.js";

// Importiamo la chiave privata del nostro wallet che abbiamo salvato dopo aver eseguito il comando "yarn keygen"
// Import our wallet private key from json 
import wallet from "./wallet.json";

// Create an instance of Keypair using the private key 
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Setup a conncection to the devnet cluster
const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {
    try {

        // Use requestAirdrop to fund our wallet
        const airdropSignature = await connection.requestAirdrop(
            keypair.publicKey,      // Our : BAYn5WKbBxBNA18cPp6HoHSUGN3inEtXTfyV4JzUWLje
            1 * LAMPORTS_PER_SOL    // 1 SOL airdrop
        );

        // Display the successful transaction
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);
    } catch (error) {
        console.error(error);
    }
})();


// Once done, I obtained this transaction sigranture : https://explorer.solana.com/tx/28bJNCiySxce4rxx1ajc2vxH9BJnkkRxvt87YtxTQgA9F17eKfxMvuAiSU4WfRCCmE2ct4ewVyCvrE3N5GaTKmTd?cluster=devnet