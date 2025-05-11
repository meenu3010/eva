const express=require('express')
const port=3000;
const app=express();

app.get('/',(req,res)=>{
    res.send('welcome the server is live!');
})
app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})