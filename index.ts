import express from "express"
import bodyParser from 'body-parser'


import {AdminRoute, VandorRoute} from "./routes"

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/v1/admin",AdminRoute)
app.use("/api/v1/vandor",VandorRoute)


app.listen(8000,()=>{
    console.clear()
    console.log("App is listining to the port 8000")
})