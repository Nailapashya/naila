import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./lib/db"
import router from "./routers/router"

dotenv.config()

const PORT = process.env.PORT || 3003
const app = express()

app.use(express.json()) 

app.use(express.urlencoded({extended: true})) 
app.use(cors()) 
app.use(router)


app.listen(PORT, async() =>{
    await db.$connect()
    console.log(`Server running on port: ${PORT}`)
}) 