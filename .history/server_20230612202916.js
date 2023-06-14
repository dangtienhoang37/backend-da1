import express  from "express";
import dotenv from "dotenv"
import connect from "./database/database.js";
import { OutPutType, print } from "./helper/print.js";
import { accountRouter, doctorRouter } from "./router/index.js";

dotenv.config()
const app = express()
app.use(express.json())// đảm bảo rằng dữ liệu được gửi đến từ yêu cầu HTTP với kiểu Content-Type là application/json sẽ được phân tích và chuyển đổi thành JavaScript object

const PORT = process.env.PORT ?? 3000

app.use('/users',accountRouter)

app.use('/doctorapi',doctorRouter)

// app.use('/user')
app.listen(PORT, async()=> {
    // debugger
    await connect() // connect to DB
    print(`listening on ${PORT}`,OutPutType.SUCESS)
})