import mongoose from "mongoose";
import app from "./app";
import config from "./App/config";

main().catch((err) => console.log(err));

async function main() {

    try{
        await mongoose.connect(config.database_url as string);

        app.listen(config.port, () => {
          console.log(`Example app listening on port ${config.port}`);
        });
    }catch(error){
        console.log(error);
    }

 
}
