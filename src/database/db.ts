import mongoose from "mongoose";

async function connectDb(){
    await mongoose.connect(`mongodb+srv://jfgomes458:hsJCeSuo71IDJVpw@proflyte.sub2gd4.mongodb.net/?retryWrites=true&w=majority&appName=Proflyte`)
}

export default connectDb