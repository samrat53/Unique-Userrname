import express from "express";
import bodyParser from "body-parser";
const app=express();
const PORT= 5173;
app.use(express.static("public"));
app.listen(PORT,()=>console.log(`Port ${PORT} active`));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});