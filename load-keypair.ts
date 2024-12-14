import  {Keypair} from "@solana/web3.js";
import "dotenv/config";

let prt_key=process.env['PRT_KEY']

if (prt_key.length){
    const asArray=Uint8Array.from(JSON.parse(prt_key));
    const keypair = Keypair.fromSecretKey(asArray);

    console.log(`Public key: ${keypair.publicKey.toBase58()}`);

}
else {
    console.log('Add PRT_KEY to .env');
    process.exit(1);

}
