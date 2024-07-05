const express=require('express');
const config=require("./shared/config")
const apiRoutes=require('./api')
const db =require("./db")

const app = express();


app.use(express.json())
app.use(apiRoutes);


db.authenticate().then(()=>{
    console.log("connection to DB Successfully");
    app.listen(config.port,()=>{
        console.log(`server running on port ${config.port}`);
    })
})
.catch((err)=>{
    console.log("Error connecting to DB",err);
})


