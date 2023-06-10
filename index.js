const express = require('express');
const cors = require('cors');
const {connection,Trip} = require('./model/model')


const  app = express();
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.send({"mag":"Server is Active"})
})



app.get("/trip",async (req,res)=>{

 let data= await Trip.find()

res.send({"data":data})

})



app.post("/trip", async(req,res)=>{
let data=  req.body;

let d = await Trip.insertMany([data])

res.send({"mag":"added","data":d})
})



app.delete("/trip/:id", async (req,res)=>{

    let id= req.params.id;
    
    let d= await Trip.findByIdAndDelete(id)

    res.send({"msg":"deleted","data":d})

})


app.get("/trip/filter", async(req,res)=>{
let data= req.body ;

let d= await Trip.find(data)
res.send({"data":d})

})



app.listen(8080,()=>{

try {
    connection;
    console.log("DB connection success full ")
} catch (error) {
    console.log("err from db connection ",error)
}


    console.log("Listning to port 8080")
})



