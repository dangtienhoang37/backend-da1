import express  from "express";
import dotenv from "dotenv"
import connect from "./database/database";

dotenv.config()
const app = express()

const PORT = process.env.PORT ?? 3000

app.listen(PORT, async()=> {
    await connect() // connect to DB
    console.log('listening on port:' + PORT)
})