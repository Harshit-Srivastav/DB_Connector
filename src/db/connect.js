import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

const dbConnect = async () => {
    try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    // Inspect the result (connection object) console.log(connectionInstance.connection)
    console.log(connectionInstance.connection.host)
    
    } catch(e) {
        console.log(e)
        process.exit(1)
    }
}

export default dbConnect