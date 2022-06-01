const mongoose =require('mongoose');
const express=require('express');
const dotenv=require('dotenv');
dotenv.config({
    path:"./config.env",
});
const PORT= 3000;

const app =express();
const knittyDB=mongoose.connect(()=>{
    console.log("DATABASE IS UP AND RUNNING...");
});
app.use(express.json({extended:false}));
app.get('/', (request, response)=> response.send('store up and running'));

//define routes
//tells where to grab the user js to run the page for creating a user. 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/products', require('./routes/api/products'));



app.listen(PORT, ()=> console.log(`server started on ${PORT}`));