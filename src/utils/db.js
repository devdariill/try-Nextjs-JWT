import {connect} from"mongoose";
export async function connectDB(){
    try {
        await connect("mongodb://localhost:27017/nextjs-auth")
        console.log("DB connected")
    } catch (error) {
        console.log(error);   
    }
}


