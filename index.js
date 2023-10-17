import express from "express";
import bodyParser from "body-parser";
const app=express();
const PORT= 5173;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
    const email=req.body["inputEmail"];
    const digits=req.body["inputNumOfDigits"];
    const separator=req.body["inputSeparator"];
    console.log(`email: ${email} digits: ${digits} separator: ${separator}`);
})

app.listen(PORT,()=>console.log(`Port ${PORT} active`));