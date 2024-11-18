import express from "express"
import connectDB from "./SRC/database/auth.db.js"


const app = express()



app.get("/", (req, res) => {
    res.send("hello world")
})

const server = () =>{
    const PORT = 8000
    connectDB()
    try {
        app.listen(PORT, () => {
            console.log(`working on ${PORT}`)
        })
    } catch (error) {
        console.log(`error: ${error}`)
    }
}

 server()
