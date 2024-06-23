import dotenv from 'dotenv'
import path from 'path'
import { app } from "./app.js";
import { fileURLToPath } from 'url';
import dbConnect from './db/connect.js';
// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = path.dirname(__filename);

// Resolve the path to the .env file in the root directory
const envPath = path.resolve(__dirname, './.env');


dotenv.config({
    path: envPath
})


const port = process.env.PORT || 8001

dbConnect().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on PORT ${port}`)
    })
}).catch((e) => {
    console.log('Mongo DB Connection Error')
})
