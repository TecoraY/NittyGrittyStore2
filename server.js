const express=require('express');
//connect database by telling where the database is defined/stored
const connectDB=require("./config/database");
const app =express();
//call the database, do here for app to run properly
connectDB();
app.use(express.json({extended:false}));
app.get('/', (request, response)=> response.send('store up and running'));

//define routes
//tells where to grab the user js to run the page for creating a user. 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/products', require('./routes/api/products'));

const PORT= process.env.PORT|| 5000;

app.listen(PORT, ()=> console.log(`server started on ${PORT}`));