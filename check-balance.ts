import "dotenv/config";
import  {
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
    clusterApiUrl,
    Connection,
    sendAndConfirmTransaction
} from "@solana/web3.js";

let prt_key=process.env['PRT_KEY']

if (prt_key.length){
    const asArray=Uint8Array.from(JSON.parse(prt_key));
    const keypair=Keypair.fromSecretKey(asArray)

    const connection= new Connection(clusterApiUrl('devnet'))



    let balance=await connection.getBalance(keypair.publicKey)
    console.log(`Wallet Address: ${keypair.publicKey}`)
    console.log(`Balance in Lamports: ${balance}`)
    console.log(`Balance: ${balance/LAMPORTS_PER_SOL}:`)





}
else {
    console.log('Add PRT_KEY to .env');
    process.exit(1);

}
